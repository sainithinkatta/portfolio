import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Sparkles, Award, BookOpen, Users, Newspaper } from 'lucide-react';
import educationData from '../data/educationData';
import GeometricConstellation from '@/components/animations/GeometricConstellation';

const extracurricularActivities = [
  {
    icon: Users,
    title: "Tech Club Member",
    activities: [
      "Built projects and prototypes in hackathons, coding competitions, and hands-on workshops",
      "Co-organized meetups and study circles; shared tips, repos, and live demos",
      "Collaborated in small squads with scoped features, split tasks, shipped on time"
    ]
  },
  {
    icon: Newspaper,
    title: "Tech News Contributor",
    activities: [
      "Wrote and edited pieces on trends, tools, and campus tech events for Tech News",
      "Researched sources and interviewed organizers to publish clear, accurate articles",
      "Boosted readership with timely coverage and crisp summaries"
    ]
  }
];

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      id="education"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-20 lg:py-32 bg-gradient-to-b from-background via-purple-50/30 to-background dark:via-purple-950/10 relative overflow-hidden"
    >
      {/* Geometric Constellation Background */}
      <GeometricConstellation />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-40 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-purple-200 dark:border-purple-800 shadow-lg">
              <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Academic Background
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Education
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
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
            My academic journey that built the foundation for my technical expertise and problem-solving skills.
          </motion.p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.6
              }
            }
          }}
          className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.9
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-card/80 dark:bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Icon Background */}
                <motion.div
                  className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full filter blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* Content with Relative Positioning */}
                <div className="relative z-10 space-y-6">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <GraduationCap className="h-7 w-7 text-white" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-xl font-bold font-serif text-foreground mb-2 leading-tight"
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        {edu.degree}
                      </motion.h3>
                    </div>
                  </div>

                  {/* University Name */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-lg font-medium text-foreground">{edu.university}</p>

                      <div className="flex items-center text-sm bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 px-3 py-2 rounded-lg backdrop-blur-sm">
                        <MapPin size={14} className="mr-2 flex-shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                      
                    </div>
                  </div>

                  {/* Description */}
                  <motion.ul className="space-y-3">
                    {edu.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start text-sm leading-relaxed"
                      >
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mr-3 mt-1.5 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
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

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extracurricular Activities Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 1.2
              }
            }
          }}
          className="max-w-5xl mx-auto mt-16"
        >
          {/* Extracurricular Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-pink-200 dark:border-pink-800 shadow-lg mb-4">
              <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
                Beyond Academics
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3">
              Activities
            </h3>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            />
          </motion.div>

          {/* Activities Grid */}
          <motion.div
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.5
                }
              }
            }}
            className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto"
          >
            {extracurricularActivities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120
                      }
                    }
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 dark:from-card/60 dark:to-card/40 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-md hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center shadow-md"
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, -5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </motion.div>
                        <h4 className="text-base font-bold text-foreground leading-tight">
                          {activity.title}
                        </h4>
                      </div>

                      {/* Activities List */}
                      <ul className="space-y-2.5">
                        {activity.activities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start text-sm leading-relaxed"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 mr-2 mt-1.5 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;