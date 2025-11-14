import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Enhanced Depth Parallax System
 * Creates multiple layers that move at different speeds for 3D depth illusion
 *
 * TUNING VARIABLES:
 * - LAYER_SPEEDS: Array of speeds for each layer (negative = moves backward on scroll)
 * - springConfig: Adjust stiffness/damping for smoothness
 * - Layer opacity/blur for atmospheric depth
 */

const ENABLE_PARALLAX = true; // Set to false to disable
const LAYER_COUNT = 5; // Number of parallax layers
const LAYER_SPEEDS = [-0.5, -0.3, 0, 0.3, 0.5]; // Speed multipliers per layer (0 = no movement)

/**
 * Individual Parallax Layer Component
 */
const ParallaxLayer = ({ children, speed, className = '', zIndex = 0, blur = 0, opacity = 1 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Apply spring for smooth motion
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Transform scroll into Y movement based on speed
  const y = useTransform(smoothProgress, [0, 1], [0, speed * 200]);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ zIndex }}>
      <motion.div
        style={{
          y,
          filter: blur > 0 ? `blur(${blur}px)` : 'none',
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Container for managing multiple depth layers
 */
const DepthLayers = ({ children, className = '' }) => {
  if (!ENABLE_PARALLAX) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

/**
 * Hook for creating depth-aware elements
 * Usage: const { style, ref } = useDepthEffect(0.5)
 */
export const useDepthEffect = (depth = 0) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // depth: 0 = no movement, 1 = max forward, -1 = max backward
  const y = useTransform(smoothProgress, [0, 1], [0, depth * 200]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return {
    ref,
    style: { y, scale }
  };
};

/**
 * Atmospheric Depth Background
 * Creates layered gradient planes that move at different speeds
 */
export const AtmosphericDepth = () => {
  if (!ENABLE_PARALLAX) return null;

  const layers = [
    { speed: -0.8, color: 'from-blue-500/5 to-purple-500/5', blur: 60, opacity: 0.3 },
    { speed: -0.5, color: 'from-purple-500/10 to-pink-500/10', blur: 40, opacity: 0.4 },
    { speed: -0.2, color: 'from-pink-500/5 to-orange-500/5', blur: 20, opacity: 0.3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {layers.map((layer, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll();
        const y = useTransform(scrollYProgress, [0, 1], [0, layer.speed * 300]);

        return (
          <motion.div
            key={index}
            ref={ref}
            className={`absolute inset-0 bg-gradient-to-br ${layer.color}`}
            style={{
              y,
              filter: `blur(${layer.blur}px)`,
              opacity: layer.opacity,
              zIndex: index,
            }}
          />
        );
      })}
    </div>
  );
};

/**
 * Floating Elements that respond to scroll with depth
 */
export const FloatingDepthElement = ({
  children,
  depth = 0.3,
  rotateOnScroll = false,
  className = ''
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const y = useTransform(smoothProgress, [0, 1], [100 * depth, -100 * depth]);
  const rotate = rotateOnScroll
    ? useTransform(smoothProgress, [0, 1], [0, 360])
    : useTransform(smoothProgress, [0, 1], [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, rotate, opacity }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Section wrapper with automatic depth layers
 */
export const DepthSection = ({ children, className = '', backgroundLayers = true }) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {backgroundLayers && <AtmosphericDepth />}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export { ParallaxLayer };
export default DepthLayers;
