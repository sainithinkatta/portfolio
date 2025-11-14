import { motion } from 'framer-motion';

const FloatingCode = () => {
  const codeSnippets = [
    'const',
    'function',
    '{ }',
    '=>',
    'import',
    'export',
    'async',
    'await',
    'return',
    'class',
    'new',
    'this',
    'if',
    'else',
    'for',
    'while',
    'try',
    'catch',
  ];

  const generateRandomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((code, index) => {
        const startPos = generateRandomPosition();
        return (
          <motion.div
            key={index}
            className="absolute font-mono text-xs sm:text-sm font-bold text-purple-600/10 dark:text-purple-400/10"
            initial={{
              left: `${startPos.x}%`,
              top: `${startPos.y}%`,
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          >
            {code}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingCode;
