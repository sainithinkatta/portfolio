import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/motion/SectionHeading';
import SectionFrame from '@/components/ui/section-frame';
import { EASE } from '@/lib/motion';
import experiences from '@/data/experience.json';

const Experience = () => (
  <SectionFrame id="experience" tone="plain" className="!border-[#c8ddff] !bg-[#eef5ff]/80 backdrop-blur-xl dark:!border-[#2f6fbf]/50 dark:!bg-[#0d2744]/85">
    <div className="absolute left-[45%] top-0 h-80 w-80 rounded-full bg-[#8ec5ff]/20 blur-[100px] dark:bg-[#2d79c7]/15" />
    <SectionHeading
      eyebrow="Professional Journey"
      title="Experience."
      description="A chronicle of the roles and projects that have shaped my career."
    />

    <div className="border-t border-[#b8d3ff]/80 dark:border-[#2f6fbf]/50">
      {experiences.map((experience) => (
        <motion.article
          key={`${experience.company}-${experience.title}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: .7, delay: .05, ease: EASE }}
          className="group grid gap-8 border-b border-[#b8d3ff]/80 py-10 last:border-b-0 dark:border-[#2f6fbf]/50 md:grid-cols-[1fr_1.35fr] md:gap-12 lg:py-14"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{experience.title}</h3>
            <p className="mt-3 text-lg text-foreground/75">{experience.company}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-[#0767df] dark:text-[#79b5ff]" />{experience.location}</p>
            {experience.current && (
              <span className="mt-4 flex w-fit items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-[#86f39f]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current Role
              </span>
            )}
          </div>

          <div>
            <ul className="space-y-4">
              {experience.description.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[.9375rem]">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0767df] dark:bg-[#79b5ff]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  </SectionFrame>
);

export default Experience;
