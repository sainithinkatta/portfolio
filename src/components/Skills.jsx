import { motion } from 'framer-motion';

const skills = {
  'GenAI': [
    'Azure OpenAI',
    'LLM Agents',
    'RAG',
    'AI Workflows',
    'n8n'
  ],
  Backend: [
    'Java',
    'Spring Boot',
    'Spring MVC',
    'Python',
    'FastAPI',
    'Node.js',
    'Flask',
    'Django',
    'RESTful APIs',
    'Microservices',
    'Kafka'
  ],
  Frontend: [
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'AngularJS',
    'Tailwind CSS',
    'Bootstrap',
    'Radix/shadcn',
    'Jest',
    'Playwright'
  ],
  Database: [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Redis',
    'Cassandra',
    'Cosmos DB',
    'SQL'
  ],
  'Cloud & DevOps': [
    'Azure',
    'AWS',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Git',
    'Bitbucket',
    'CI/CD',
    'Postman'
  ],
  'Architecture & Security': [
    'API Design',
    'WebSockets',
    'Event-Driven Architecture',
    'JWT',
    'RBAC',
    'Spring Security',
    'Microservices'
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-48 border-t border-border">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <p className="text-caption uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mb-3 sm:mb-4">
            Tech Stack
          </p>
          <h2 className="text-headline text-foreground text-balance">
            Tools I work with.
          </h2>
          <p className="mt-4 sm:mt-5 text-body text-muted-foreground max-w-2xl">
            Technologies and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="divide-y divide-border">
          {Object.entries(skills).map(([category, technologies], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-[260px,1fr] gap-x-12 gap-y-3 sm:gap-y-4 py-6 sm:py-8"
            >
              <h3 className="text-title text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-body-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
