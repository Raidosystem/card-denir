import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.8)',
        borderRadius: '16px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 140, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 140, 0, 0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements for tech look */}
      {/* Vertical white line from top - left side */}
      <motion.div 
        style={{
          position: 'absolute',
          top: 0,
          left: '20px',
          width: '2px',
          height: '50%',
          background: 'linear-gradient(180deg, #ffffff 0%, transparent 100%)',
        }}
        animate={{
          opacity: [0.2, 1, 0.2],
          boxShadow: [
            '0 0 0px rgba(255, 255, 255, 0)',
            '0 0 20px rgba(255, 255, 255, 0.6)',
            '0 0 0px rgba(255, 255, 255, 0)',
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      {/* Vertical white line from bottom - right side */}
      <motion.div 
        style={{
          position: 'absolute',
          bottom: 0,
          right: '20px',
          width: '2px',
          height: '50%',
          background: 'linear-gradient(0deg, #ffffff 0%, transparent 100%)',
        }}
        animate={{
          opacity: [0.2, 1, 0.2],
          boxShadow: [
            '0 0 0px rgba(255, 255, 255, 0)',
            '0 0 20px rgba(255, 255, 255, 0.6)',
            '0 0 0px rgba(255, 255, 255, 0)',
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 1.25,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, transparent 45%, rgba(255, 140, 0, 0.1) 45%, rgba(255, 140, 0, 0.1) 55%, transparent 55%)',
          opacity: 0.6,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, transparent 45%, rgba(255, 140, 0, 0.1) 45%, rgba(255, 140, 0, 0.1) 55%, transparent 55%)',
          opacity: 0.6,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          width: '40px',
          height: '3px',
          backgroundColor: 'rgba(255, 140, 0, 0.5)',
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      {children}
    </motion.div>
  );
};

export default Card; 