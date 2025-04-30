import React from 'react';
import { useRouter } from 'next/router';

export default function ShareResult({ globalCheese, turkishCheese, correctAnswers = 0 }) {
  const router = useRouter();

  const handleTryAgain = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/quiz';
    }
  };

  const handleShare = () => {
    const shareText = `🧀 I found my perfect cheese match on The Cheese Quiz: ${globalCheese.name}!`;
    const url = 'https://the-cheese-quiz.vercel.app';
    if (navigator.share) {
      navigator.share({
        title: 'The Cheese Quiz',
        text: shareText,
        url: url,
      });
    } else {
      alert('Sharing not supported on this device. Please copy the link manually.');
    }
  };

  // 🎯 Komik bilgi sonucu mesajı
  const getKnowledgeMessage = () => {
    if (correctAnswers === 0) return "😅 Have you ever eaten cheese?";
    if (correctAnswers <= 2) return "🧐 You know a little, but still a long way to go!";
    if (correctAnswers <= 4) return "🧠 You're on your way to cheese mastery!";
    return "👑 You are a true cheese connoisseur!";
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>🎉 Your Perfect Cheese Match!</h2>

      <div style={{ margin: '2rem 0' }}>
        <h3>{globalCheese.name}</h3>
        {globalCheese.image && (
          <img
            src={globalCheese.image}
            alt={globalCheese.name}
            style={{ maxWidth: '300px', borderRadius: '12px' }}
          />
        )}
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h4>🇹🇷 You should also try this Turkish gem:</h4>
        <h3>{turkishCheese.name}</h3>
        {turkishCheese.image && (
          <img
            src={turkishCheese.image}
            alt={turkishCheese.name}
            style={{ maxWidth: '300px', borderRadius: '12px' }}
          />
        )}
      </div>

      <div style={{ marginTop: '2rem', fontStyle: 'italic', color: '#4b5563' }}>
        <p>{getKnowledgeMessage()}</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={handleTryAgain}
          style={{
            margin: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#facc15',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          🔁 Try Again
        </button>

        <button
          onClick={handleShare}
          style={{
            margin: '1rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          📤 Share Your Result
        </button>
      </div>
    </div>
  );
}
