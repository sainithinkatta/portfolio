import { motion } from 'framer-motion';

const FloatingBlobs = () => {
  const blobs = [
    {
      size: 'w-96 h-96',
      color: 'bg-purple-300/30 dark:bg-purple-600/20',
      position: '-top-48 -left-48',
      duration: 20,
      delay: 0
    },
    {
      size: 'w-[32rem] h-[32rem]',
      color: 'bg-blue-300/30 dark:bg-blue-600/20',
      position: 'top-1/2 -right-64',
      duration: 25,
      delay: 2
    },
    {
      size: 'w-80 h-80',
      color: 'bg-pink-300/30 dark:bg-pink-600/20',
      position: 'bottom-0 left-1/4',
      duration: 22,
      delay: 1
    },
    {
      size: 'w-72 h-72',
      color: 'bg-cyan-300/30 dark:bg-cyan-600/20',
      position: 'top-1/4 left-1/3',
      duration: 18,
      delay: 3
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute ${blob.size} ${blob.color} ${blob.position} rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: blob.delay
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBlobs;
