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
      fontFamily: 'Poppins, sans-serif',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      
      {/* Hero Section */}
      <div style={{
        marginTop: '40px',
        marginBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          marginBottom: '1rem',
          color: '#333'
        }}>
          🧀 DISCOVER YOUR PERFECT CHEESE!
        </h1>

        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: '#555'
        }}>
          Take the quiz and explore the flavors waiting for you.
        </p>

        {/* Start Quiz Button */}
        <Link href="/quiz">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#facc15',
              padding: '16px 32px',
              fontSize: '1.4rem',
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
          marginTop: '10px',
          marginBottom: '50px'
        }}
      />

      {/* What is The Cheese Quiz Section */}
      <div style={{
        maxWidth: '600px',
        padding: '0 20px'
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
        marginTop: '40px',
        fontSize: '0.8rem',
        color: '#999'
      }}>
        Made with ❤️ by The Cheese Quiz
      </p>
    </div>
  );
}
