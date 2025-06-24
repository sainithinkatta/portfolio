import { useState, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from "../assets/sainithin.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section
      id="home"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-100 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div
              className={`flex flex-col items-center space-y-4 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative group">
                <img
                  src={profile}
                  alt="Katta Sai Nithin Reddy"
                  className="w-72 rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <h1 className="text-2xl md:text-5xl font-bold animate-fade-in">
                  <span className="bg-gradient-to-r from-blue-500 via-primary to-purple-500 bg-clip-text text-transparent">
                    Katta Sai Nithin Reddy
                  </span>
                </h1>

                <h2 className="text-sm sm:text-base lg:text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 mt-1 relative">
                  Software Developer
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </h2>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-snug font-medium max-w-3xl mx-auto">
                  <p>
                    Hi, I'm a passionate Full Stack Developer with hands-on experience building scalable, user-focused web applications from the ground up. I specialize in combining strong responsive frontend design along with backend engineering.
                  </p>
                  <p>
                    I bring a deep technical toolkit to the table: from crafting RESTful APIs with <strong>Java, Spring Boot</strong>, and <strong>Node.js</strong>, to designing modern interfaces using <strong>React, Angular, Vue</strong>, and <strong>Tailwind</strong>. I thrive in fast-paced, Agile environments and have worked with cross-functional teams to deliver high-impact features with a focus on quality and performance.
                  </p>
                  <p>
                    My recent experience includes developing banking solutions at <strong>Assurant</strong> and smart warehouse systems at <strong>Quinbay</strong>. I love building efficient, maintainable code and continuously strive to push the boundaries of what's possible in software engineering.
                  </p>
                  <p className="font-semibold">
                    Let's build something amazing together !!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons & Down Arrow */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in delay-1000">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.linkedin.com/in/sainithinkatta/", "_blank")}
                className="px-6 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Button>
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const experience = document.getElementById("experience");
                  if (experience) experience.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center mt-16 animate-fade-in delay-300">
              <ArrowDownCircle
                className="text-primary animate-bounce cursor-pointer"
                size={36}
                onClick={() => {
                  const experienceSection = document.getElementById("experience");
                  if (experienceSection) experienceSection.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;