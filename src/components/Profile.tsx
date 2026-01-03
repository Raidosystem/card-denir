import { motion } from 'framer-motion';
import denirImg from '../imgs/denir-img.jpeg';

interface ProfileProps {
  name: string;
  description: string;
  imageUrl?: string;
}

const Profile = ({ name, description, imageUrl }: ProfileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '32px',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '8px solid #ff8c00',
          boxShadow: '0 0 25px rgba(255, 140, 0, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px',
          position: 'relative',
        }}
      >
        <img
          src={imageUrl || denirImg}
          alt={name}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            imageRendering: 'crisp-edges',
            filter: 'brightness(1.05) contrast(1.1)',
          }}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '8px',
          color: '#ffffff',
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(255, 140, 0, 0.3)',
          letterSpacing: '2px',
        }}
      >
        {name}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '80px' }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          height: '3px',
          backgroundColor: 'var(--primary-color)',
          marginBottom: '16px',
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: 'center',
          fontSize: '16px',
          color: 'var(--text-color)',
          maxWidth: '280px',
          lineHeight: '1.6',
        }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Profile; 