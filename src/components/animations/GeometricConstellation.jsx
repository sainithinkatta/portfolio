import { motion } from 'framer-motion';

const GeometricConstellation = () => {
  // Generate constellation nodes
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 10 + (i % 4) * 26,
    y: 10 + Math.floor(i / 4) * 30,
    size: Math.random() * 6 + 4,
  }));

  // Generate connections between nearby nodes
  const connections = [];
  nodes.forEach((node, i) => {
    nodes.forEach((otherNode, j) => {
      if (i < j) {
        const dx = node.x - otherNode.x;
        const dy = node.y - otherNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 40) {
          connections.push({ from: node, to: otherNode });
        }
      }
    });
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full">
        {/* Animated connections */}
        {connections.map((conn, index) => (
          <motion.line
            key={`line-${index}`}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated nodes */}
        {nodes.map((node) => (
          <motion.g key={`node-${node.id}`}>
            {/* Pulse ring */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-600 dark:text-blue-400"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.id * 0.2,
              }}
            />
            {/* Core node */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size / 2}
              className="fill-purple-600 dark:fill-purple-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.id * 0.15,
              }}
            />
          </motion.g>
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0" />
            <stop offset="50%" stopColor="#764ba2" stopOpacity="1" />
            <stop offset="100%" stopColor="#f093fb" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GeometricConstellation;
