import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import experiences from '../data/experience';
import GeometricConstellation from '@/components/animations/GeometricConstellation';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="experience"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-20 lg:py-32 bg-gradient-to-b from-background via-blue-50/30 to-background dark:via-blue-950/10 relative overflow-hidden"
    >
      {/* Geometric Constellation Background */}
      <GeometricConstellation />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header with Advanced Animation */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800 shadow-lg">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Professional Journey
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Work Experience
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.4 }
              }
            }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A chronicle of my professional journey, showcasing the roles and projects that have shaped my career.
          </motion.p>
        </motion.div>

        {/* Timeline with Framer Motion */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />

          {/* Timeline Items */}
          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                    scale: 0.8
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={cn(
                  "relative mb-10 sm:mb-16 group",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}
              >
                {/* Timeline Icon with Pulse Animation */}
                <motion.div
                  className={cn(
                    "absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full border-4 flex items-center justify-center z-10 shadow-lg",
                    experience.current
                      ? "bg-gradient-to-br from-blue-600 to-purple-600 border-background"
                      : "bg-card border-border"
                  )}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <Briefcase
                    size={16}
                    className={experience.current ? "text-white" : "text-blue-600 dark:text-blue-400"}
                  />
                  {experience.current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-600"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className={cn(
                  "relative ml-12 sm:ml-16 md:ml-0 md:w-5/12",
                  index % 2 === 1 ? "md:ml-auto" : ""
                )}>
                  <motion.div
                    className="bg-card/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ y: -8 }}
                  >
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Content with Relative Positioning */}
                    <div className="relative z-10">
                      <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                        <motion.h3
                          className="text-xl font-bold font-serif text-foreground"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          {experience.title}
                        </motion.h3>
                        {experience.current && (
                          <motion.span
                            className="text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-sm"
                            animate={{
                              boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.5)", "0 0 0 8px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0)"]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          >
                            Current
                          </motion.span>
                        )}
                      </div>

                      <div className="mb-4 space-y-2">
                        <p className="text-lg font-medium text-foreground">{experience.company}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin size={14} className="mr-2 text-blue-600 dark:text-blue-400" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-sm font-medium bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg mb-5 w-fit backdrop-blur-sm">
                        <Calendar size={14} className="mr-2" />
                        <span>{experience.period}</span>
                      </div>

                      <motion.ul className="space-y-3">
                        {experience.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start text-sm leading-relaxed"
                          >
                            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mr-3 mt-1.5 flex-shrink-0"></span>
                            <span className="text-muted-foreground no-underline decoration-none">{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;