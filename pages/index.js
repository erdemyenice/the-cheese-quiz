import Link from 'next/link';

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
      padding: '20px'
    }}>
      
      {/* Hero Section */}
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

      {/* Start Quiz Button */}
      <Link href="/quiz">
        <button style={{
          backgroundColor: '#facc15',
          padding: '15px 30px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s',
          marginBottom: '40px'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#fbbf24'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#facc15'}
        >
          🚀 Start The Quiz
        </button>
      </Link>

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

      {/* What is The Cheese Quiz Section */}
      <div style={{
        marginTop: '50px',
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

    </div>
  );
}
