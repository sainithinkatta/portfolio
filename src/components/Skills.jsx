import { Code2, Database, Server, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import ParticleField from '@/components/animations/ParticleField';
import { ParallaxLayer, FloatingDepthElement } from '@/components/animations/DepthLayers';
import MagneticCard from '@/components/animations/MagneticCard';

const Skills = () => {
  const skills = {
    "Backend": {
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue",
      proficiency: 90,
      technologies: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring MVC", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Flask", level: 75 },
        { name: "Django", level: 75 },
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 85 },
        { name: "Kafka", level: 75 }
      ]
    },
    "Frontend": {
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      proficiency: 85,
      technologies: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "AngularJS", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "jQuery", level: 80 },
        { name: "Jest", level: 80 },
        { name: "Playwright", level: 75 }
      ]
    },
    "Database": {
      icon: Database,
      color: "from-green-500 to-emerald-500",
      glowColor: "green",
      proficiency: 85,
      technologies: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Cassandra", level: 70 },
        { name: "SQL", level: 90 }
      ]
    },
    "Cloud & DevOps": {
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      glowColor: "orange",
      proficiency: 80,
      technologies: [
        { name: "AWS", level: 85 },
        { name: "GCP", level: 75 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "Git", level: 95 },
        { name: "JIRA", level: 85 },
        { name: "Agile/Scrum", level: 90 },
        { name: "CI/CD", level: 80 }
      ]
    },
    "Architecture & Security": {
      icon: Zap,
      color: "from-yellow-500 to-amber-500",
      glowColor: "yellow",
      proficiency: 85,
      technologies: [
        { name: "Spring Security", level: 85 },
        { name: "API Design", level: 90 },
        { name: "WebSockets", level: 75 },
        { name: "Event-Driven", level: 80 },
        { name: "Microservices", level: 85 }
      ]
    }
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Animated Particle Background - Deep layer */}
      <ParallaxLayer speed={-0.4} className="absolute inset-0" zIndex={0}>
        <ParticleField color="#667eea" particleCount={60} />
      </ParallaxLayer>

      {/* Background decoration with parallax depth */}
      <FloatingDepthElement depth={0.6} className="absolute top-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full filter blur-3xl opacity-30" />
      <FloatingDepthElement depth={0.4} className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full filter blur-3xl opacity-30" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              Tech Stack
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          {/* Skills Section */}
          <div className="space-y-12">
            {/* Skills Grid with Magnetic Cards */}
            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.7
                  }
                }
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Object.entries(skills).map(([category, { icon: Icon, color, glowColor, proficiency, technologies }]) => (
                <motion.div
                  key={category}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5
                      }
                    }
                  }}
                >
                  <MagneticCard
                    glowColor={glowColor}
                    className="h-full group p-6 rounded-2xl bg-card border border-border hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/10"
                  >
                    {/* Header with Icon and Title */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-br ${color} text-white`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6" />
                        </motion.div>
                        <h4 className="text-xl font-bold font-serif text-foreground">{category}</h4>
                      </div>
                    </div>

                    {/* Technologies with Hover Effect */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <motion.div
                            key={typeof tech === 'string' ? tech : tech.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="px-3 py-1 text-sm font-medium bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
                              title={typeof tech === 'object' ? `${tech.level}% proficiency` : undefined}
                            >
                              {typeof tech === 'string' ? tech : tech.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </MagneticCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;