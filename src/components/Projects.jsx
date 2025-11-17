import { ExternalLink, Github, ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TiltCard from '@/components/animations/TiltCard';
import MagneticButton from '@/components/animations/MagneticButton';
import FloatingCode from '@/components/animations/FloatingCode';
import GeometricConstellation from '@/components/animations/GeometricConstellation';

import projects from '../data/projects';

import onlineVoting from "../assets/projects/online_voting.png";
import realTimeThreatAnalysis from "../assets/projects/real_time_threat_ananalysis.png";
import notesApp from "../assets/projects/notes_app.png";
import commerceNest from "../assets/projects/commerce-nest.png";
import personalFinanceTracker from "../assets/projects/personal-finance-tracker.png";
import videoObjectTracking from "../assets/projects/video_tracking.png";

const projectImages = {
  "Online Voting System": onlineVoting,
  "Real Time Threat Intelligence": realTimeThreatAnalysis,
  "NoteMate": notesApp,
  "CommerceNest": commerceNest,
  "Personal Finance Tracker": personalFinanceTracker,
  "Video Object Tracking": videoObjectTracking
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scroll
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 lg:py-32 bg-gradient-to-b from-background to-purple-50/20 dark:to-purple-950/10 relative overflow-hidden">
        {/* Geometric Constellation Background */}
        <GeometricConstellation />

        {/* Floating Code Background */}
        <FloatingCode />

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 60, 0],
              y: [0, 40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-72 h-72 bg-pink-300/15 dark:bg-pink-600/8 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
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
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my work demonstrating expertise across the full stack
              </p>
            </div>

            {/* Projects Grid with Stagger Animation */}
            <motion.div
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <TiltCard 
                    className="h-full group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                    onClick={() => handleCardClick(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                      {projectImages[project.title] ? (
                        <img
                          src={projectImages[project.title]}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-6xl font-serif font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent opacity-20">
                            {project.title[0]}
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          className="text-white font-semibold text-lg"
                        >
                          Click to view details
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold font-serif text-foreground mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-none"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-none"
                          >
                            +{project.tags.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Corner Accent with Glow */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300"
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button with Magnetic Effect */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex justify-center"
            >
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://github.com/sainithinkatta", "_blank")}
                  className="group px-8 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:border-purple-500 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    View All Projects
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Detail Modal - Rendered at root level */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            style={{ position: 'fixed' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="sticky top-4 float-right z-10 p-2 mr-4 mt-4 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-red-50 dark:hover:bg-red-950/30 hover:border-red-300 dark:hover:border-red-700 transition-all duration-200"
              >
                <X className="h-5 w-5 text-foreground hover:text-red-600 dark:hover:text-red-400" />
              </motion.button>

              {/* Modal Content */}
              <div className="p-8 clear-both">
                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative h-80 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
                >
                  {projectImages[selectedProject.title] ? (
                    <img
                      src={projectImages[selectedProject.title]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-8xl font-serif font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent opacity-20">
                        {selectedProject.title[0]}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Project Title & Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {selectedProject.liveUrl && (
                      <Button
                        size="default"
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl"
                      >
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          <span>View Live</span>
                        </a>
                      </Button>
                    )}
                    {selectedProject.repoUrl && (
                      <Button
                        size="default"
                        variant="outline"
                        asChild
                        className="rounded-xl border-2"
                      >
                        <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + tagIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-3 py-1 text-sm font-medium bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-none"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Detailed Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold font-serif text-foreground mb-3 flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedProject.detailedDescription}
                  </p>
                </motion.div>

                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold font-serif text-foreground mb-4 flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-muted-foreground leading-relaxed text-base">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;