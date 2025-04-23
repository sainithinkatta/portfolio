import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import experiences from '../data/experience';

const Experience = () => {
  const timelineRef = useRef(null);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  };

  const handleScroll = () => {
    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add('animate-in');
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20 opacity-0 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            A chronicle of my professional journey, showcasing the roles and projects that have shaped my career.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 rounded-full"></div>
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={cn(
                "relative mb-10 sm:mb-16 group timeline-item opacity-0",
                index % 2 === 0 ? "md:pr-12 slide-from-left" : "md:pl-12 slide-from-right"
              )}
            >
              <div className={cn(
                "absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full border-3 sm:border-4 flex items-center justify-center z-10 transition-all duration-300 shadow-md group-hover:scale-110",
                experience.current 
                  ? "bg-primary border-background" 
                  : "bg-card border-background"
              )}>
                <Briefcase size={14} className={experience.current ? "text-primary-foreground" : "text-primary"} />
              </div>

              <div className={cn(
                "relative ml-12 sm:ml-16 md:ml-0 md:w-5/12 transform transition-all duration-300 group-hover:-translate-y-1",
                index % 2 === 1 ? "md:ml-auto" : ""
              )}>
                <div className="bg-card rounded-xl p-5 sm:p-7 border border-border/40 shadow-sm group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{experience.title}</h3>
                    {experience.current && (
                      <span className="text-xs font-medium bg-primary/15 text-primary px-2 sm:px-3 py-1 rounded-full shadow-sm shrink-0">Current</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-base sm:text-lg font-medium text-foreground mb-1">{experience.company}</p>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <MapPin size={14} className="mr-1 text-muted-foreground/70" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm font-medium bg-secondary/50 text-secondary-foreground px-2 sm:px-3 py-1 sm:py-2 rounded-md mb-4 sm:mb-5 w-fit">
                    <Calendar size={14} className="mr-1 sm:mr-2 text-primary" />
                    <span>{experience.period}</span>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm leading-relaxed">
                        <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary mr-2 sm:mr-3 mt-1 sm:mt-1.5 flex-shrink-0"></span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn(
                  "hidden md:block absolute top-[calc(50%-1px)] w-[7.43rem] h-0.5 bg-border -translate-y-1/2 group-hover:bg-primary/30 transition-colors duration-300",
                  index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                )}></div>


              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .timeline-item.animate-in {
          animation: slideIn 0.8s ease-out forwards;
        }

        .slide-from-left {
          transform: translateX(-50px);
        }

        .slide-from-right {
          transform: translateX(50px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-from-right.animate-in {
          animation: slideInRight 0.8s ease-out forwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;