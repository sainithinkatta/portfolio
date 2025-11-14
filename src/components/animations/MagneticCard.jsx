import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Magnetic Card Component
 * Card that responds to cursor position with magnetic pull and 3D tilt
 *
 * TUNING VARIABLES:
 * - magneticStrength: How strongly the card pulls toward cursor (0-1)
 * - tiltStrength: How much the card tilts (degrees)
 * - springConfig: Adjust stiffness/damping for feel
 */

const ENABLE_MAGNETIC = true; // Set to false to disable
const MAGNETIC_STRENGTH = 0.3; // 0 = no pull, 1 = follows cursor exactly
const TILT_STRENGTH = 10; // degrees of tilt
const SCALE_ON_HOVER = 1.05; // How much card grows on hover

const MagneticCard = ({
  children,
  className = '',
  onHover,
  onLeave,
  glowColor = 'purple',
  disabled = false
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for position and rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Spring configuration for smooth motion
  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current || disabled || !ENABLE_MAGNETIC) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Calculate magnetic pull (limited by MAGNETIC_STRENGTH)
    const pullX = distanceX * MAGNETIC_STRENGTH;
    const pullY = distanceY * MAGNETIC_STRENGTH;

    // Calculate 3D tilt based on mouse position
    const tiltY = (distanceX / rect.width) * TILT_STRENGTH;
    const tiltX = -(distanceY / rect.height) * TILT_STRENGTH;

    x.set(pullX);
    y.set(pullY);
    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    if (onLeave) onLeave();
  };

  const glowColors = {
    purple: 'rgba(168, 85, 247, 0.3)',
    blue: 'rgba(59, 130, 246, 0.3)',
    pink: 'rgba(236, 72, 153, 0.3)',
    green: 'rgba(34, 197, 94, 0.3)',
    orange: 'rgba(249, 115, 22, 0.3)',
    yellow: 'rgba(234, 179, 8, 0.3)',
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        x: ENABLE_MAGNETIC ? springX : 0,
        y: ENABLE_MAGNETIC ? springY : 0,
        rotateX: ENABLE_MAGNETIC ? springRotateX : 0,
        rotateY: ENABLE_MAGNETIC ? springRotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: SCALE_ON_HOVER,
        transition: { duration: 0.2 }
      }}
    >
      {children}

      {/* Animated Glow Effect on Hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            boxShadow: `0 0 30px ${glowColors[glowColor] || glowColors.purple}`,
            filter: 'blur(10px)',
          }}
        />
      )}

      {/* Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%', skewX: -20 }}
          animate={isHovered ? { x: '200%' } : { x: '-100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

/**
 * Simpler version for mobile/low-end devices
 */
export const SimpleMagneticCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticCard;
