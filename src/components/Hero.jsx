import { useState, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden flex items-center"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                   Sai Nithin 
                </span>
              </h1>

              <div className="flex justify-center">
                <div className="inline-block">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
I’m a Software Developer with experience in delivering scalable, high-performance full-stack applications.

                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const experience = document.getElementById("experience");
                  if (experience) experience.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.linkedin.com/in/sainithinkatta/", "_blank")}
                className="px-8 py-6 text-base font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>

      {/* Down Arrow - Fixed at bottom center */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <ArrowDownCircle
          className="text-blue-600 dark:text-blue-400 animate-bounce cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          size={40}
          onClick={() => {
            const experienceSection = document.getElementById("experience");
            if (experienceSection) experienceSection.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
};

export default Hero;