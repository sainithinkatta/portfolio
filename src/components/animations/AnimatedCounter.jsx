import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

/**
 * Animated Counter Component
 * Counts up to a target number when scrolled into view
 *
 * TUNING VARIABLES:
 * - duration: How long the count animation takes (ms)
 * - ease: Easing function for the count
 */

const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutExpo
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentValue = Math.floor(easeOutExpo * parseFloat(value));
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Set final value to handle decimals/suffixes correctly
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};

/**
 * Animated Stat Card with Counter
 */
export const AnimatedStatCard = ({
  value,
  suffix = '',
  label,
  icon: Icon,
  gradient = "from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
  textGradient = "from-blue-600 to-purple-600"
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{
        y: -8,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-blue-100 dark:border-blue-900/20 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group`}
    >
      {/* Background Ripple Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        whileHover={{ scale: 2 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10">
        {Icon && (
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="mb-3 inline-block"
          >
            <Icon className={`h-8 w-8 bg-gradient-to-r ${textGradient} bg-clip-text text-transparent`} />
          </motion.div>
        )}

        <div className={`text-4xl font-bold font-serif bg-gradient-to-r ${textGradient} bg-clip-text text-transparent mb-2`}>
          <AnimatedCounter value={value} suffix={suffix} />
        </div>

        <div className="text-sm font-medium text-muted-foreground">
          {label}
        </div>
      </div>

      {/* Corner Glow Effect */}
      <motion.div
        className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
};

export default AnimatedCounter;
