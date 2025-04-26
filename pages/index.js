export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff8dc',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧀 The Cheese Quiz</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '400px' }}>
        Find your perfect cheese match with just 5 fun questions! 🧀✨
      </p>
      <button style={{
        backgroundColor: '#facc15',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '9999px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.3s'
      }}
      onMouseOver={e => e.target.style.backgroundColor = '#fbbf24'}
      onMouseOut={e => e.target.style.backgroundColor = '#facc15'}
      >
        Start Quiz
      </button>
    </div>
  );
}
