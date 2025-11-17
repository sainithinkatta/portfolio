import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import TypewriterText from '@/components/animations/TypewriterText';
import MouseParallax from '@/components/animations/MouseParallax';
import MagneticButton from '@/components/animations/MagneticButton';
import FloatingBlobs from '@/components/animations/FloatingBlobs';
import AnimatedGradient from '@/components/animations/AnimatedGradient';

const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = [
    'Software Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24"
    height="24"
    {...props}
  >
    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
    <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
    <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
    <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
  </svg>
);


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-20"
    >
      {/* Animated Gradient Background */}
      <AnimatedGradient />

      {/* Floating Blobs */}
      <FloatingBlobs />

      <MouseParallax strength={15} className="container mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main Heading with Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-tight tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-foreground"
                >
                  Hi, <span className="whitespace-nowrap">I'm  Sai Nithin</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg block mt-2"
                >
                  <TypewriterText
                    texts={roles}
                    className="text-2xl sm:text-4xl lg:text-[2.95rem] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent whitespace-nowrap"
                  />
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed lg:whitespace-nowrap"
              >
                Building scalable, high-performance applications with modern technologies.
              </motion.p>
            </motion.div>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <MagneticButton>
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social Links with Stagger Animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    delayChildren: 1.2,
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex items-center justify-center gap-6"
            >
              {[
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sai-nithin-katta-1401001b7', color: 'text-blue-600 dark:text-blue-400' },
                { icon: FaGithub, url: 'https://github.com/sainithinkatta', color: 'text-gray-700 dark:text-gray-300' },
                { icon: MailIcon, url: 'mailto:sainithinkatta09@gmail.com', color: 'text-purple-600 dark:text-purple-400' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="flex items-center" // Add flex centering here
                  >
                    <MagneticButton>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Icon className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                      </a>
                    </MagneticButton>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </MouseParallax>

      {/* Animated Scroll Indicator */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
  className="absolute bottom-10 left-0 right-0 flex justify-center"
>
  <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('skills')}>
    <span className="text-sm text-muted-foreground font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
      Scroll to explore
    </span>
    <div className="w-6 h-10 rounded-full border-2 border-purple-400/50 dark:border-purple-600/50 flex justify-center p-2 group-hover:border-purple-600 dark:group-hover:border-purple-400 transition-colors">
      <motion.div
        className="w-1.5 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </div>
</motion.div>
    </section>
  );
};

export default Hero;