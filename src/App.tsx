import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import Card from './components/Card';
import Profile from './components/Profile';
import SocialButton from './components/SocialButton';
import { motion } from 'framer-motion';
import './App.css';

// Você pode substituir essas informações pelas suas
const userInfo = {
  name: 'DENIR FERREIRA',
  description: 'MENTOR E PALESTRANTE',
  // A imagem agora será carregada diretamente do Profile component
  social: [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/5517991428169',
      icon: <FaWhatsapp />,
      color: '#dbdadb'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/denirferreirasantos?igsh=MXdpMm5rMHVtdHN6bQ%3D%3D&utm_source=qr',
      icon: <FaInstagram />,
      color: '#dbdadb'
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/share/17t9kgeMgL/?mibextid=wwXIfr',
      icon: <FaFacebook />,
      color: '#dbdadb'
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      url: 'https://www.tiktok.com/@denir.ferreira?_r=1&_t=ZM-92HGK2u9wLM',
      icon: <FaTiktok />,
      color: '#dbdadb'
    },
    {
      id: 'ebook',
      label: 'E-Book',
      url: 'https://p.eduzz.com/2923626',
      icon: <FaBook />,
      color: '#dbdadb'
    },
    {
      id: 'mentoria',
      label: 'Mentoria',
      url: 'https://chk.eduzz.com/40Q3J4730B',
      icon: <FaChalkboardTeacher />,
      color: '#dbdadb'
    }
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

function App() {
  return (
    <>
      <div className="background"></div>
      <div className="card-container">
        <Card>
          <Profile 
            name={userInfo.name} 
            description={userInfo.description} 
          />
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {userInfo.social.map((item) => (
              <div className="glow" key={item.id}>
                <SocialButton 
                  icon={item.icon}
                  label={item.label}
                  url={item.url}
                  color={item.color}
                />
              </div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              marginTop: '20px'
            }}
          >
            © {new Date().getFullYear()} {userInfo.name}
          </motion.p>
        </Card>
      </div>
    </>
  );
}

export default App;
