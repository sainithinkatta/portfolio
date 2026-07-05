import { ExternalLink, Github, ArrowRight, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  "FinGo": personalFinanceTracker,
  "Video Object Tracking": videoObjectTracking
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 lg:py-48 border-t border-border">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
          >
            <p className="text-caption uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mb-3 sm:mb-4">
              Selected Work
            </p>
            <h2 className="text-headline text-foreground text-balance">
              Projects.
            </h2>
            <p className="mt-4 sm:mt-5 text-body text-muted-foreground max-w-2xl">
              A showcase of work demonstrating expertise across the full stack.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => openModal(project)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group text-left rounded-lg overflow-hidden bg-surface transition-shadow duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  {projectImages[project.title] ? (
                    <img
                      src={projectImages[project.title]}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-7xl font-semibold text-foreground/10">
                        {project.title[0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-title text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 sm:mt-5 inline-flex items-center gap-1 text-[0.8125rem] font-medium text-accent">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/sainithinkatta", "_blank")}
            >
              View all on GitHub
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto bg-background rounded-t-2xl sm:rounded-lg border border-border shadow-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-5 sm:p-8 lg:p-10">
                <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-6 sm:mb-8 bg-surface-2">
                  {projectImages[selectedProject.title] && (
                    <img
                      src={projectImages[selectedProject.title]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>

                <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold tracking-tight text-foreground leading-tight pr-10 sm:pr-12">
                  {selectedProject.title}
                </h2>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-3">
                  {selectedProject.liveUrl && (
                    <Button asChild size="sm">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {selectedProject.repoUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>

                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i}>{tag}</Badge>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10">
                  <h3 className="text-caption uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mb-3 sm:mb-4">
                    Overview
                  </h3>
                  <p className="text-body text-foreground/80">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {selectedProject.features?.length > 0 && (
                  <div className="mt-8 sm:mt-10">
                    <h3 className="text-caption uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground mb-3 sm:mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-body text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
