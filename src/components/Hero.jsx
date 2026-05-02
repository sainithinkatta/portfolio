import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background pt-12"
    >
      <div className="mx-auto max-w-[1100px] px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-6"
          >
            AI Full Stack Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-foreground text-balance max-w-5xl"
          >
            Hi, I'm <span className="italic">Sai Nithin.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-subtitle text-muted-foreground max-w-2xl text-balance"
          >
            I build scalable, high-performance applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-x-8 gap-y-4"
          >
            <button
              onClick={() => scrollToSection('experience')}
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-primary-foreground text-[0.9375rem] font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View my work
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-accent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full px-2"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex items-center gap-2"
          >
            {[
              { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sainithinreddy/', label: 'LinkedIn' },
              { icon: FaGithub, url: 'https://github.com/sainithinkatta', label: 'GitHub' },
              { icon: Mail, url: 'mailto:sainithinkatta09@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="h-[1.125rem] w-[1.125rem]" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
