import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ShareResult({ globalCheese, turkishCheese, knowledgeScore, totalKnowledge }) {
  const router = useRouter();
  const [downloading, setDownloading] = useState(false);

  const getFunnyMessage = (score) => {
    switch (score) {
      case 0:
        return "🤣 Have you even eaten cheese before?";
      case 1:
        return "😂 Maybe you've nibbled on some cheese once!";
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

  const handleTryAgain = () => {
    router.push('/quiz');
  };

  const handleDownloadResult = async () => {
    if (typeof window !== 'undefined') {
      setDownloading(true);
      const html2canvas = (await import('html2canvas')).default;
      const element = document.getElementById('result-section');
      if (element) {
        const canvas = await html2canvas(element, { scale: 2 });
        const link = document.createElement('a');
        link.download = 'my_cheese_quiz_result.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
      setDownloading(false);
    }
  };

  const handleShareResult = () => {
    const message = `I found my perfect cheese match on The Cheese Quiz! 🧀 Try it yourself! https://the-cheese-quiz.vercel.app/`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
      <div id="result-section" style={{ width: '100%', maxWidth: '500px' }}>
        
        <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
          🧀 Your Cheese Matches!
        </h1>

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
      </div>

      {/* Download Result Button */}
      <button onClick={handleDownloadResult} disabled={downloading} style={{
        backgroundColor: '#4caf50',
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px',
        color: 'white',
        transition: 'background 0.3s',
        opacity: downloading ? 0.6 : 1
      }}
      >
        {downloading ? 'Preparing...' : '📸 Download Your Result'}
      </button>

      {/* Share Result Button */}
      <button onClick={handleShareResult} style={{
        backgroundColor: '#3b82f6',
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
        color: 'white',
        transition: 'background 0.3s'
      }}
      >
        📤 Share Your Result
      </button>

      {/* Try Again Button */}
      <button onClick={handleTryAgain} style={{
        backgroundColor: '#facc15',
        padding: '12px 24px',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background 0.3s'
      }}
      >
        🔁 Try Again
      </button>

    </div>
  );
}
