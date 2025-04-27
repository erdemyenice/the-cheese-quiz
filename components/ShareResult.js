import { useRef } from 'react';

export default function ShareResult({ globalCheese, turkishCheese }) {
  const resultRef = useRef();

  const captureResult = async () => {
    const html2canvas = window.html2canvas;
    const canvas = await html2canvas(resultRef.current);
    const link = document.createElement('a');
    link.download = 'my-cheese-result.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef9c3, #ffffff)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Poppins, sans-serif'
    }}>
      
      <div ref={resultRef} style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'transparent',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '10px',
          color: '#333'
        }}>🎉 Congratulations!</h1>

        <p style={{
          fontSize: '1.2rem',
          marginBottom: '30px',
          color: '#555'
        }}>You found your perfect cheese match!</p>

        {/* Global Cheese Card */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <img src={globalCheese.image} alt={globalCheese.name} style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '15px'
          }} />
          <h2 style={{ fontSize: '1.5rem', marginTop: '15px' }}>🧀 Global Cheese</h2>
          <p>{globalCheese.name}</p>
        </div>

        {/* Turkish Cheese Card */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <img src={turkishCheese.image} alt={turkishCheese.name} style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '15px'
          }} />
          <h2 style={{ fontSize: '1.5rem', marginTop: '15px' }}>🇹🇷 Turkish Discovery</h2>
          <p>{turkishCheese.name}</p>
        </div>

        <p style={{
          fontSize: '0.8rem',
          marginTop: '20px',
          color: '#888'
        }}>Made with ❤️ by The Cheese Quiz</p>
      </div>

      <button
        onClick={captureResult}
        style={{
          marginTop: '30px',
          backgroundColor: '#38bdf8',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '9999px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: 'white'
        }}
      >
        📸 Share Your Result
      </button>
          <button
  onClick={() => window.location.href = '/'}
  style={{
    marginTop: '15px',
    backgroundColor: '#facc15',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#333'
  }}
>
  🔁 Try Again
</button>


    </div>
  );
}
