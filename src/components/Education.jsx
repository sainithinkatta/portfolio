import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import educationData from '../data/educationData';

const extracurricularActivities = [
  {
    title: "Tech Club Member",
    activities: [
      "Built projects and prototypes in hackathons, coding competitions, and hands-on workshops",
      "Co-organized meetups and study circles; shared tips, repos, and live demos",
      "Collaborated in small squads with scoped features, split tasks, shipped on time"
    ]
  },
  {
    title: "Tech News Contributor",
    activities: [
      "Wrote and edited pieces on trends, tools, and campus tech events for Tech News",
      "Researched sources and interviewed organizers to publish clear, accurate articles",
      "Boosted readership with timely coverage and crisp summaries"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-32 lg:py-48 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Academic Background
          </p>
          <h2 className="text-headline text-foreground text-balance">
            Education.
          </h2>
          <p className="mt-5 text-body text-muted-foreground max-w-2xl">
            The academic journey that built the foundation for my technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {educationData.map((edu, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-lg bg-surface p-8"
            >
              <h3 className="text-title text-foreground leading-tight">
                {edu.degree}
              </h3>
              <p className="mt-3 text-body text-foreground/80">{edu.university}</p>
              <div className="mt-1 inline-flex items-center text-body-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1.5" />
                {edu.location}
              </div>

              <ul className="mt-6 space-y-3">
                {edu.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/60 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 max-w-5xl">
          <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Beyond Academics
          </p>
          <h3 className="text-[2rem] font-semibold tracking-tight text-foreground mb-12">
            Activities.
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {extracurricularActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-lg bg-surface p-6"
              >
                <h4 className="text-body font-semibold text-foreground">
                  {activity.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {activity.activities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
