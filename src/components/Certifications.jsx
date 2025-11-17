import { Award, Calendar, ExternalLink, Sparkles, Trophy } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TiltCard from '@/components/animations/TiltCard';
import GeometricConstellation from '@/components/animations/GeometricConstellation';
import certificationsData from '@/data/certificationsData';

const Certifications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="certifications"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/10 relative overflow-hidden"
    >
      {/* Geometric Constellation Background */}
      <GeometricConstellation />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-orange-300/20 dark:bg-orange-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header with Animation */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-orange-200 dark:border-orange-800 shadow-lg">
              <Trophy className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Achievements
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Certifications
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto rounded-full"
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
            Professional certifications showcasing my commitment to continuous learning and excellence
          </motion.p>
        </motion.div>

        {/* Certifications Grid with Stagger */}
        <div className="flex justify-center">
          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.6
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
          >
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: {
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
              >
                <TiltCard className="h-full">
                  <motion.div
                    className="relative h-full bg-card/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 overflow-hidden group"
                    whileHover={{ y: -8 }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Award Badge with Animation */}
                    <div className="relative z-10">
                      <div className="flex items-center mb-5">
                        <motion.div
                          className="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl mr-3 shadow-lg"
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Award className="text-white" size={24} />
                        </motion.div>
                        <h3 className="text-xl font-bold font-serif text-foreground">{cert.title}</h3>
                      </div>

                      {/* Details */}
                      <div className="mb-5 space-y-3">
                        <div className="flex items-start">
                          <span className="font-semibold text-sm mr-2 text-orange-600 dark:text-orange-400">Issuer:</span>
                          <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                        </div>
                        <motion.div
                          className="flex items-center text-sm text-muted-foreground bg-orange-50 dark:bg-orange-950/30 px-3 py-2 rounded-lg w-fit"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar size={14} className="mr-2 text-orange-600 dark:text-orange-400" />
                          <span>{cert.date}</span>
                        </motion.div>
                      </div>

                      {/* Skills with Stagger */}
                      <motion.div
                        className="mb-5"
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05
                            }
                          }
                        }}
                      >
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.05 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-none"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* View Certificate Button */}
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30 border-orange-200 dark:border-orange-800 hover:from-orange-100 hover:to-yellow-100 dark:hover:from-orange-900/50 dark:hover:to-yellow-900/50 transition-all duration-300 group/btn"
                          asChild
                        >
                          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <span className="mr-2 font-medium">View Certificate</span>
                            <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Sparkles className="h-4 w-4 text-yellow-500 dark:text-yellow-400 opacity-50" />
                    </motion.div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;