import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Enhanced Magnetic Cursor Component
 *
 * TUNING VARIABLES (adjust these for different "feel"):
 * - CURSOR_SIZE: Base size of outer ring
 * - DOT_SIZE: Size of center dot
 * - HOVER_SCALE: How much cursor grows on hover
 * - TRAIL_COUNT: Number of trailing circles
 * - springConfig.damping: Lower = more bouncy (15-40 range)
 * - springConfig.stiffness: Higher = snappier (200-600 range)
 */

const ENABLE_CURSOR = true; // Set to false to disable entirely
const CURSOR_SIZE = 32; // px - outer ring size
const DOT_SIZE = 8; // px - center dot size
const HOVER_SCALE = 1.5; // multiplier when hovering links/buttons
const TRAIL_COUNT = 3; // number of trailing cursors (0 to disable)
const TRAIL_OPACITY = [0.3, 0.2, 0.1]; // opacity for each trail element

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'click'
  const [isDesktop, setIsDesktop] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // TUNING: Adjust these values for different cursor "feel"
  const springConfig = {
    damping: 25,      // Lower = more bouncy (try 15-40)
    stiffness: 400    // Higher = snappier (try 200-600)
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail cursors with slower spring for lag effect
  const trailConfig = { damping: 30, stiffness: 200 };
  const trail1X = useSpring(cursorX, trailConfig);
  const trail1Y = useSpring(cursorY, trailConfig);
  const trail2X = useSpring(cursorX, { damping: 35, stiffness: 150 });
  const trail2Y = useSpring(cursorY, { damping: 35, stiffness: 150 });
  const trail3X = useSpring(cursorX, { damping: 40, stiffness: 100 });
  const trail3Y = useSpring(cursorY, { damping: 40, stiffness: 100 });

  const trails = [
    { x: trail1X, y: trail1Y, opacity: TRAIL_OPACITY[0] },
    { x: trail2X, y: trail2Y, opacity: TRAIL_OPACITY[1] },
    { x: trail3X, y: trail3Y, opacity: TRAIL_OPACITY[2] },
  ].slice(0, TRAIL_COUNT);

  useEffect(() => {
    // Check if desktop on mount and resize
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - CURSOR_SIZE / 2);
      cursorY.set(e.clientY - CURSOR_SIZE / 2);
      setIsVisible(true);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.hasAttribute('data-magnetic') // Custom attribute for magnetic elements
      ) {
        setIsHovering(true);
        setCursorState('hover');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorState('default');
    };

    const handleMouseDown = () => {
      setCursorState('click');
    };

    const handleMouseUp = () => {
      setCursorState(isHovering ? 'hover' : 'default');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', checkDesktop);
    };
  }, [cursorX, cursorY, isHovering]);

  // Don't render on mobile or if disabled
  if (!ENABLE_CURSOR || !isDesktop) {
    return null;
  }

  return (
    <>
      {/* Trail Elements - Render behind main cursor */}
      {trails.map((trail, index) => (
        <motion.div
          key={`trail-${index}`}
          className="pointer-events-none fixed rounded-full border-2 border-purple-500/50 dark:border-purple-400/50 z-[99999]"
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
            left: trail.x,
            top: trail.y,
            opacity: isVisible ? trail.opacity : 0,
          }}
        />
      ))}

      {/* Main Outer Ring */}
      <motion.div
        className={`pointer-events-none fixed rounded-full border-2 z-[100000] transition-colors duration-200 ${
          cursorState === 'hover'
            ? 'border-purple-500 dark:border-purple-400'
            : 'border-purple-500/70 dark:border-purple-400/70'
        }`}
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: cursorState === 'hover' ? HOVER_SCALE : cursorState === 'click' ? 0.8 : 1,
        }}
        transition={{
          scale: { duration: 0.2 },
        }}
      />

      {/* Center Dot - Instant follow (no spring) */}
      <motion.div
        className="pointer-events-none fixed rounded-full bg-purple-500 dark:bg-purple-400 z-[100000]"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          left: cursorX,
          top: cursorY,
          translateX: (CURSOR_SIZE - DOT_SIZE) / 2,
          translateY: (CURSOR_SIZE - DOT_SIZE) / 2,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: cursorState === 'click' ? 0.5 : 1,
        }}
        transition={{
          scale: { duration: 0.1 }
        }}
      />

      {/* Hover Text (optional) */}
      {cursorState === 'hover' && (
        <motion.div
          className="pointer-events-none fixed z-[100000] text-xs font-medium text-purple-600 dark:text-purple-400 whitespace-nowrap"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            translateX: CURSOR_SIZE + 10,
            translateY: CURSOR_SIZE / 2 - 8,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          Click
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
