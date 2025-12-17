import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  url: string;
  color?: string;
}

const SocialButton = ({ icon, label, url, color = 'var(--primary-color)' }: SocialButtonProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: `0 0 15px rgba(0, 0, 0, 0.3)`,
        backgroundColor: '#f0f0f0',
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        borderLeft: `4px solid #000000`,
        borderRadius: '24px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all var(--transition-speed)',
        backdropFilter: 'blur(4px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        style={{ 
          marginRight: '14px', 
          fontSize: '24px',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>
      <span style={{ 
        fontWeight: 500,
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        fontSize: '14px',
      }}>
        {label}
      </span>
      <motion.div
        style={{
          position: 'absolute',
          right: '16px',
          opacity: 0.4,
          fontSize: '12px',
        }}
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        →
      </motion.div>
    </motion.a>
  );
};

export default SocialButton; 