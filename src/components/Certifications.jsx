import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import certificationsData from '@/data/certificationsData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 lg:py-48 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Achievements
          </p>
          <h2 className="text-headline text-foreground text-balance">
            Certifications.
          </h2>
          <p className="mt-5 text-body text-muted-foreground max-w-2xl">
            Professional certifications showcasing my commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group block rounded-lg bg-surface p-6 transition-shadow duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <h3 className="text-title text-foreground leading-snug">
                {cert.title}
              </h3>
              <p className="mt-2 text-body-sm text-muted-foreground">{cert.issuer}</p>

              <div className="mt-4 inline-flex items-center text-caption text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                {cert.date}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 4).map((skill, i) => (
                  <Badge key={i}>{skill}</Badge>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-1 text-[0.8125rem] font-medium text-accent">
                View certificate
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
