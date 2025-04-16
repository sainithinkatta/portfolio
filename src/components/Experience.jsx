import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import experiences from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          {/* Increased max-width from max-w-2xl to max-w-4xl for wider description */}
          <p className="text-muted-foreground max-w-4xl mx-auto">
            A chronicle of my professional journey, showcasing the roles and projects that have shaped my career.
          </p>
        </div>
        
        {/* Increased max-width from max-w-3xl to max-w-5xl for the timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className={cn(
                "absolute left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full border-4 border-background flex items-center justify-center z-10",
                experience.current ? "bg-primary" : "bg-secondary"
              )}>
                <Briefcase size={16} className={experience.current ? "text-primary-foreground" : "text-muted-foreground"} />
              </div>
              
              {/* Content - increased width by modifying the card width */}
              <div className={cn(
                "relative ml-16 md:ml-0 md:w-5/12", // Changed from md:w-1/2 to md:w-5/12 for more proportional layout
                index % 2 === 1 ? "md:ml-auto md:pl-8 md:pr-0" : ""
              )}>
                <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    {experience.current && (
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">Current</span>
                    )}
                  </div>
                  
                  <p className="text-lg font-medium text-foreground mb-1">{experience.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{experience.location}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{experience.period}</span>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-1.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;