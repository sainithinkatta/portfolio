import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Proficiency Bar Component
 * Animated skill level indicator
 *
 * TUNING VARIABLES:
 * - animationDuration: How long the fill animation takes
 * - delay: Stagger delay for multiple bars
 */

const ProficiencyBar = ({
  label,
  level = 80,
  color = 'purple',
  showPercentage = false,
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const colors = {
    purple: { bg: 'bg-purple-500/20', fill: 'bg-gradient-to-r from-purple-600 to-pink-600' },
    blue: { bg: 'bg-blue-500/20', fill: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
    green: { bg: 'bg-green-500/20', fill: 'bg-gradient-to-r from-green-600 to-emerald-600' },
    orange: { bg: 'bg-orange-500/20', fill: 'bg-gradient-to-r from-orange-600 to-red-600' },
    yellow: { bg: 'bg-yellow-500/20', fill: 'bg-gradient-to-r from-yellow-600 to-amber-600' },
  };

  const colorScheme = colors[color] || colors.purple;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {showPercentage && (
          <motion.span
            className="text-xs font-medium text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.5 }}
          >
            {level}%
          </motion.span>
        )}
      </div>

      <div className={`h-2 rounded-full ${colorScheme.bg} overflow-hidden relative`}>
        <motion.div
          className={`h-full ${colorScheme.fill} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1.5,
            delay: delay,
            ease: [0.16, 1, 0.3, 1] // Custom easing for smooth effect
          }}
        >
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * Circular Proficiency Indicator
 * Shows skill level as a circular progress
 */
export const CircularProficiency = ({
  level = 80,
  size = 60,
  strokeWidth = 4,
  color = 'purple',
  label,
  showPercentage = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  const colors = {
    purple: '#a855f7',
    blue: '#3b82f6',
    green: '#22c55e',
    orange: '#f97316',
    yellow: '#eab308',
  };

  const strokeColor = colors[color] || colors.purple;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />

        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
      </svg>

      {/* Center text */}
      {showPercentage && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-xs font-bold text-foreground">{level}%</span>
        </motion.div>
      )}

      {label && (
        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
};

/**
 * Skill Dots Indicator
 * Shows proficiency as filled dots (5-star style)
 */
export const SkillDots = ({
  level = 80,
  maxDots = 5,
  color = 'purple',
  size = 'sm'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const filledDots = Math.round((level / 100) * maxDots);

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const colorClasses = {
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <div ref={ref} className="flex gap-1.5">
      {Array.from({ length: maxDots }).map((_, index) => (
        <motion.div
          key={index}
          className={`${sizeClasses[size]} rounded-full ${
            index < filledDots
              ? colorClasses[color]
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            type: "spring",
            stiffness: 200
          }}
        />
      ))}
    </div>
  );
};

export default ProficiencyBar;
