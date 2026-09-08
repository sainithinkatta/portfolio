import { useEffect, useMemo, useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

const GITHUB_USERNAME = 'sainithinkatta';
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`;
const DAY_IN_MS = 24 * 60 * 60 * 1000;
const CONTRIBUTION_LEVELS = [
  'bg-[#ebedf0] dark:bg-[#161b22]',
  'bg-[#9be9a8] dark:bg-[#0e4429]',
  'bg-[#40c463] dark:bg-[#006d32]',
  'bg-[#30a14e] dark:bg-[#26a641]',
  'bg-[#216e39] dark:bg-[#39d353]',
];
const WEEKDAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const currentYear = new Date().getUTCFullYear();
const visibleYearCount = currentYear >= 2027 ? 4 : 3;
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

const toDateKey = (date) => date.toISOString().slice(0, 10);
const getContributionLabel = (day) => `${day.count} ${day.count === 1 ? 'contribution' : 'contributions'} on ${dateFormatter.format(new Date(`${day.date}T00:00:00Z`))}.`;

const getCalendar = (year, contributionMap) => {
  const firstDay = new Date(Date.UTC(year, 0, 1));
  const lastDay = new Date(Date.UTC(year, 11, 31));
  const gridStart = new Date(firstDay);
  const gridEnd = new Date(lastDay);

  gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay());
  gridEnd.setUTCDate(gridEnd.getUTCDate() + (6 - gridEnd.getUTCDay()));

  const weekCount = Math.floor((gridEnd - gridStart) / DAY_IN_MS / 7) + 1;
  const weeks = Array.from({ length: weekCount }, (_, weekIndex) => (
    Array.from({ length: 7 }, (_, weekdayIndex) => {
      const date = new Date(gridStart);
      date.setUTCDate(gridStart.getUTCDate() + (weekIndex * 7) + weekdayIndex);

      if (date.getUTCFullYear() !== year) return null;

      const dateKey = toDateKey(date);
      const contribution = contributionMap.get(dateKey);

      return {
        date: dateKey,
        count: contribution?.count ?? 0,
        level: contribution?.level ?? 0,
      };
    })
  ));

  const monthLabels = Array.from({ length: 12 }, (_, monthIndex) => {
    const date = new Date(Date.UTC(year, monthIndex, 1));
    const weekIndex = Math.floor((date - gridStart) / DAY_IN_MS / 7);

    return {
      label: date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }),
      weekIndex,
    };
  });

  return { weeks, monthLabels };
};

const getAvailableYears = (data) => {
  const totalYears = Object.keys(data?.total ?? {})
    .filter((year) => /^\d{4}$/.test(year))
    .map(Number);
  const contributionYears = (data?.contributions ?? [])
    .map(({ date }) => Number(date?.slice(0, 4)))
    .filter((year) => Number.isInteger(year));

  return [...new Set([...totalYears, ...contributionYears])].sort((a, b) => b - a);
};

const GitHubContributions = () => {
  const [data, setData] = useState(null);
  const [activeYear, setActiveYear] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();

    const loadContributions = async () => {
      try {
        const response = await fetch(CONTRIBUTIONS_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`GitHub contributions request failed: ${response.status}`);

        const payload = await response.json();
        if (!Array.isArray(payload.contributions)) throw new Error('GitHub contributions response was invalid');

        setData(payload);
        setStatus('ready');
      } catch (error) {
        if (error.name === 'AbortError') return;
        setStatus('error');
      }
    };

    loadContributions();
    return () => controller.abort();
  }, []);

  const availableYears = useMemo(() => getAvailableYears(data), [data]);
  const visibleYears = useMemo(
    () => availableYears.filter((year) => year <= currentYear).slice(0, visibleYearCount),
    [availableYears]
  );

  useEffect(() => {
    if (visibleYears.length > 0 && !visibleYears.includes(activeYear)) {
      setActiveYear(visibleYears[0]);
    }
  }, [activeYear, visibleYears]);

  const contributionMap = useMemo(() => new Map(
    (data?.contributions ?? []).map((contribution) => [contribution.date, {
      count: Number.isFinite(Number(contribution.count)) ? Number(contribution.count) : 0,
      level: Math.min(4, Math.max(0, Number(contribution.level) || 0)),
    }])
  ), [data]);

  const calendar = useMemo(
    () => activeYear ? getCalendar(activeYear, contributionMap) : { weeks: [], monthLabels: [] },
    [activeYear, contributionMap]
  );

  const yearlyTotals = useMemo(() => {
    const totals = {};
    for (const [date, { count }] of contributionMap) {
      const year = date.slice(0, 4);
      totals[year] = (totals[year] ?? 0) + count;
    }
    // Prefer the calendar API's yearly totals; sum daily data only as a fallback.
    for (const [year, total] of Object.entries(data?.total ?? {})) {
      if (Number.isInteger(total) && total >= 0) totals[year] = total;
    }
    return totals;
  }, [data, contributionMap]);
  const activeTotal = yearlyTotals[activeYear] ?? 0;

  if (status === 'loading') {
    return (
      <div className="w-full max-w-[860px] rounded-2xl border border-border/70 bg-surface/55 px-4 py-3 text-left text-xs text-muted-foreground sm:px-5 sm:py-4">
        Loading GitHub contributions…
      </div>
    );
  }

  if (status === 'error' || visibleYears.length === 0) {
    return (
      <div className="w-full max-w-[860px] rounded-2xl border border-border/70 bg-surface/55 px-4 py-3 text-left text-xs text-muted-foreground sm:px-5 sm:py-4">
        GitHub contribution history is unavailable right now.
      </div>
    );
  }

  return (
    <Tooltip.Provider delayDuration={0} skipDelayDuration={0} disableHoverableContent>
    <section aria-label="GitHub contribution calendar" className="mx-auto grid w-full max-w-[880px] grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-3 rounded-2xl border border-border/70 bg-surface/55 px-4 py-3 text-left sm:px-5 sm:py-4">
      <p className="col-start-1 row-start-1 text-sm font-medium text-foreground" aria-live="polite">
        {activeTotal.toLocaleString('en-US')} {activeTotal === 1 ? 'contribution' : 'contributions'} in {activeYear}
      </p>
      <div className="col-start-2 row-start-2 flex items-center pt-4 pb-1">
        <div className="flex flex-col gap-2" aria-label="Contribution years">
          {visibleYears.map((year) => (
            <button
              key={year}
              type="button"
              aria-pressed={activeYear === year}
              onClick={() => setActiveYear(year)}
              className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6875rem] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                activeYear === year
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:bg-surface hover:text-foreground'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="col-start-1 row-start-2 min-w-0 overflow-x-auto pb-1" tabIndex="0" aria-label={`${activeYear} GitHub contribution calendar`}>
        <div className="min-w-[660px]">
          <div className="grid grid-cols-[2rem_auto] gap-x-2">
            <div />
            <div
              className="grid h-4 items-start gap-x-[3px] text-[9px] leading-none text-muted-foreground"
              style={{ gridTemplateColumns: `repeat(${calendar.weeks.length}, 11px)` }}
            >
              {calendar.monthLabels.map(({ label, weekIndex }) => (
                <span key={`${label}-${weekIndex}`} style={{ gridColumnStart: weekIndex + 1 }}>
                  {label}
                </span>
              ))}
            </div>

            <div className="grid grid-rows-7 gap-y-[3px] pt-0.5 text-[9px] leading-[11px] text-muted-foreground">
              {WEEKDAY_LABELS.map((label, index) => <span key={`${label}-${index}`}>{label}</span>)}
            </div>

            <div className="flex gap-[3px]">
              {calendar.weeks.map((week, weekIndex) => (
                <div key={`week-${weekIndex}`} className="grid w-[11px] shrink-0 grid-rows-7 gap-y-[3px]">
                  {week.map((day, weekdayIndex) => (
                    day ? (
                      <Tooltip.Root key={day.date}>
                        <Tooltip.Trigger asChild>
                      <span
                        role="img"
                        tabIndex="0"
                        aria-label={getContributionLabel(day)}
                        className={`h-[11px] w-[11px] rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${CONTRIBUTION_LEVELS[day.level]}`}
                      />
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                        <Tooltip.Content
                          side="top"
                          sideOffset={8}
                          collisionPadding={12}
                          hideWhenDetached
                          className="pointer-events-none z-[200] max-w-[calc(100vw-24px)] rounded-lg bg-[#343b46] px-3 py-2 text-center font-sans text-sm font-medium leading-5 text-white shadow-lg"
                        >
                          {getContributionLabel(day)}
                        </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    ) : (
                      <span key={`empty-${weekIndex}-${weekdayIndex}`} className="h-[11px] w-[11px]" aria-hidden="true" />
                    )
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
    </Tooltip.Provider>
  );
};

export default GitHubContributions;
