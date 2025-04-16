
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

import projects from '../data/projects';

import onlineVoting from "../assets/projects/online_voting.png";
import realTimeThreatAnalysis from "../assets/projects/real_time_threat_ananalysis.png";
import notesApp from "../assets/projects/notes_app.png";
import commerceNest from "../assets/projects/commerce-nest.png";

const projectImages = {
  "Online Voting System": onlineVoting,
  "Real Time Threat Intelligence": realTimeThreatAnalysis,
  "NoteMate": notesApp,
  "CommerceNest": commerceNest
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of my work that demonstrates my skills and experiences across different technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={projectImages[project.title]}
                  alt={project.title} 
                  className="w-full object-cover object-top transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <Maximize2 size={20} />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <img 
                            src={projectImages[project.title]}
                            alt={project.title} 
                            className="w-full h-auto rounded-md"
                          />
                        </div>
                        <div>
                          <p className="mb-4">{project.detailedDescription}</p>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1 mb-4">
                            {project.features?.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-1.5"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            {project.liveUrl && (
                              <Button asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                  <span className="mr-1">Live Demo</span>
                                  <ExternalLink size={14} />
                                </a>
                              </Button>
                            )}
                            {project.repoUrl && (
                              <Button variant="outline" asChild>
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                  <Github size={14} className="mr-1" />
                                  <span>Repository</span>
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <span className="mr-1">Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github size={14} className="mr-1" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button 
            variant="default" 
            size="lg"
            onClick={() => window.open("https://github.com/sainithinkatta", "_blank")}
          >
            View More Projects...
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
