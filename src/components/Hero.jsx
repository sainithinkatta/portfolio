import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import profile from "../assets/sainithin.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 mb-8 mt-8 sm:mt-0 animate-float overflow-hidden">
            <div className="w-full h-full rounded-full border-4 border-background overflow-hidden">
              <img
                src={profile}
                alt="Sai Nithin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-500 via-primary to-purple-500 bg-clip-text text-transparent">
              Katta Sai Nithin Reddy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl animate-fade-in delay-100">
            Full Stack Developer
          </p>

          <div className="text-muted-foreground text-base md:text-sm leading-relaxed max-w-4xl mb-8 animate-fade-in delay-150">
            <p className="mb-4">
              Hi, I’m a passionate Full Stack Developer with hands-on experience building scalable, user-focused web applications from the ground up. I specialize in combining strong responsive frontend design along with backend engineering.
            </p>
            <p className="mb-4">
              I bring a deep technical toolkit to the table: from crafting RESTful APIs with <strong>Java, Spring Boot</strong>, and <strong>Node.js</strong>, to designing modern interfaces using <strong>React, Angular, Vue</strong>, and <strong>Tailwind</strong>. I thrive in fast-paced, Agile environments and have worked with cross-functional teams to deliver high-impact features with a focus on quality and performance.
            </p>
            <p className="mb-4">
              My recent experience includes developing banking solutions at <strong>Assurant</strong> and smart warehouse systems at <strong>Quinbay</strong>. I love building efficient, maintainable code and continuously strive to push the boundaries of what’s possible in software engineering.
            </p>
            <p>
              <strong>Let’s build something amazing together !!</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/sai-nithin-katta-1401001b7", "_blank")}
            >
              Contact Me
            </Button>

            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const experience = document.getElementById('experience');
                if (experience) experience.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 animate-fade-in delay-300">
        <ArrowDownCircle
          className="text-primary animate-bounce cursor-pointer"
          size={36}
          onClick={() => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) skillsSection.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>
    </section>
  );
};

export default Hero;