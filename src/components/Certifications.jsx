import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Calendar } from 'lucide-react';
import SectionHeading from '@/components/motion/SectionHeading';
import SectionFrame from '@/components/ui/section-frame';
import { Badge } from '@/components/ui/badge';
import { EASE } from '@/lib/motion';
import certifications from '@/data/certificationsData';

const gradients = ['from-violet-500 to-indigo-500', 'from-sky-500 to-cyan-400', 'from-fuchsia-500 to-rose-400'];

const Certifications = () => (
  <SectionFrame id="certifications" tone="soft">
    <SectionHeading
      title="Certifications."
      description="Professional certifications showcasing continuous learning."
    />
    <div className="grid gap-5 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <motion.a
          key={cert.title}
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: .65, delay: index * .08, ease: EASE }}
          whileHover={{ y: -7 }}
          className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-border/70 bg-surface-2 p-7 shadow-sm sm:p-8"
        >
          <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} text-white`}><Award className="h-5 w-5" /></div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">{cert.issuer}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{cert.title}</h3>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="h-4 w-4" />{cert.date}</div>
          <div className="mt-6 flex flex-wrap gap-2">{cert.skills.map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}</div>
          <div className="mt-auto flex items-center justify-between pt-8 text-sm font-semibold"><span>View credential</span><span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></div>
        </motion.a>
      ))}
    </div>
  </SectionFrame>
);

export default Certifications;
