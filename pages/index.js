import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef9c3, #ffffff)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins, sans-serif',
      textAlign: 'center',
      padding: '20px',
      position: 'relative'
    }}>
      
{/* Hero Section */}
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh', // ekranın %90'ı kaplasın
  position: 'relative'
}}>
  <h1 style={{
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#333'
  }}>
    🧀 Discover Your Perfect Cheese!
  </h1>

  <p style={{
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555'
  }}>
    Take the quiz and explore the flavors waiting for you.
  </p>

  {/* Animated Start Quiz Button */}
  <Link href="/quiz">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: '#facc15',
        padding: '18px 36px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background 0.3s',
        marginBottom: '20px'
      }}
    >
      🚀 Start The Quiz
    </motion.button>
  </Link>

  {/* Scroll Down Icon (ŞİMDİ Hero içinde!) */}
  <div style={{
    position: 'absolute',
    bottom: '10px',
    animation: 'bounce 2s infinite'
  }}>
    <span style={{
      fontSize: '2rem',
      color: '#facc15'
    }}>⬇️</span>
  </div>

</div>


      {/* Hero Image */}
      <img 
        src="/images/landing-cheese.jpg" 
        alt="Cheese Hero" 
        style={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto',
          borderRadius: '20px',
          marginTop: '20px'
        }}
      />

      {/* Scroll Down Icon */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        animation: 'bounce 2s infinite'
      }}>
        <span style={{
          fontSize: '2rem',
          color: '#facc15'
        }}>⬇️</span>
      </div>

      {/* What is The Cheese Quiz Section */}
      <div style={{
        marginTop: '80px',
        maxWidth: '600px'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#333'
        }}>
          What is The Cheese Quiz?
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#555'
        }}>
          The Cheese Quiz helps you discover new flavors and hidden cheese gems that match your unique taste preferences! Take the quiz and unlock your cheese destiny.
        </p>
      </div>

      {/* Footer */}
      <p style={{
        marginTop: '50px',
        fontSize: '0.8rem',
        color: '#999'
      }}>
        Made with ❤️ by The Cheese Quiz
      </p>

      {/* Keyframes for Bounce Animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>

    </div>
  );
}
