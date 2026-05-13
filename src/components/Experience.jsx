import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import experiences from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-48 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-caption uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mb-3 sm:mb-4">
            Professional Journey
          </p>
          <h2 className="text-headline text-foreground text-balance">
            Experience.
          </h2>
          <p className="mt-4 sm:mt-5 text-body text-muted-foreground max-w-2xl">
            A chronicle of the roles and projects that have shaped my career.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[200px,1fr] gap-x-12 gap-y-3 py-8 sm:py-12 border-b border-border last:border-b-0"
            >
              <div className="flex md:block items-center gap-3 md:space-y-2">
                <p className="text-caption uppercase tracking-[0.12em] text-muted-foreground">
                  {experience.period}
                </p>
                {experience.current && (
                  <span className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-title text-foreground">{experience.title}</h3>
                <p className="mt-1 text-body text-foreground/80">{experience.company}</p>
                <div className="mt-1 inline-flex items-center text-body-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
                  {experience.location}
                </div>

                <ul className="mt-5 sm:mt-6 space-y-3">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
