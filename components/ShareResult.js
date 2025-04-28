import Link from 'next/link';

export default function ShareResult({ globalCheese, turkishCheese, knowledgeScore, totalKnowledge }) {
  
  const getFunnyMessage = (score) => {
    switch (score) {
      case 0:
        return "🤣 Have you even eaten cheese before?";
      case 1:
        return "😂 Okay, okay... maybe you've nibbled on some cheese once!";
      case 2:
        return "👏 Not bad! You're on your way to becoming a Cheese Taster!";
      case 3:
        return "❤️ Almost perfect! You're definitely a Cheese Lover!";
      case 4:
        return "👑 I bow before you, Great Cheese Guru!";
      default:
        return "";
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fef9c3',
      fontFamily: 'Poppins, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
        🧀 Your Cheese Matches!
      </h1>

      {/* Global Cheese */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{globalCheese.name}</h2>
        <img 
          src={globalCheese.image}
          alt={globalCheese.name}
          style={{
            width: '250px',
            height: 'auto',
            borderRadius: '20px'
          }}
        />
      </div>

      {/* Turkish Cheese */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{turkishCheese.name}</h2>
        <img 
          src={turkishCheese.image}
          alt={turkishCheese.name}
          style={{
            width: '250px',
            height: 'auto',
            borderRadius: '20px'
          }}
        />
      </div>

      {/* Knowledge Score */}
      {typeof knowledgeScore !== 'undefined' && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#333' }}>
            🎓 Knowledge Quiz: {knowledgeScore} out of {totalKnowledge} correct!
          </h3>
          <p style={{
            fontSize: '1rem',
            marginTop: '10px',
            color: '#555',
            maxWidth: '300px'
          }}>
            {getFunnyMessage(knowledgeScore)}
          </p>
        </div>
      )}

      {/* Try Again Button */}
      <Link href="/quiz">
        <button style={{
          backgroundColor: '#facc15',
          padding: '15px 30px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '20px',
          transition: 'background 0.3s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#fbbf24'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#facc15'}
        >
          🔁 Try Again
        </button>
      </Link>
    </div>
  );
}
