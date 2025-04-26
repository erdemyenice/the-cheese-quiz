import { useState } from 'react';

const questions = [
  {
    question: "What's your ideal cheese texture?",
    options: ["Soft", "Firm", "Crumbly", "Stringy", "Hard"],
    image: "/images/texture.jpg"
  },
  {
    question: "Which flavor do you prefer?",
    options: ["Mild", "Sharp", "Nutty", "Strong", "Light", "Sour"],
    image: "/images/flavor.jpg"
  },
  {
    question: "How would you describe your food personality?",
    options: ["Elegant", "Classic", "Rustic", "Playful", "Healthy", "Smoky"],
    image: "/images/personality.jpg"
  },
  {
    question: "How do you usually enjoy cheese?",
    options: ["On its own", "In a salad", "With bread", "Melted", "With wine"],
    image: "/images/enjoy.jpg"
  },
  {
    question: "Which region's food do you like most?",
    options: ["Mediterranean", "French", "British", "Middle Eastern", "Asian"],
    image: "/images/region.jpg"
  }
];

const cheeseData = [
  { name: "Brie", texture: "Soft", flavor: "Mild", personality: "Elegant", origin: "Global" },
  { name: "Cheddar", texture: "Firm", flavor: "Sharp", personality: "Classic", origin: "Global" },
  { name: "Ezine White Cheese", texture: "Crumbly", flavor: "Salty", personality: "Authentic", origin: "Turkey" },
  { name: "Tulum", texture: "Crumbly", flavor: "Strong", personality: "Rustic", origin: "Turkey" },
  { name: "Lor", texture: "Soft", flavor: "Light", personality: "Healthy", origin: "Turkey" },
  { name: "Mihaliç", texture: "Hard", flavor: "Salty", personality: "Traditional", origin: "Turkey" }
];

const getCheeseImage = (name) => {
  const map = {
    "Brie": "brie.jpg",
    "Cheddar": "cheddar.jpg",
    "Ezine White Cheese": "ezine.jpg",
    "Tulum": "tulum.jpg",
    "Lor": "lor.jpg",
    "Mihaliç": "mihalic.jpg"
  };
  return `/images/cheeses/${map[name] || "default.jpg"}`;
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    const [texture, flavor, personality] = answers;

    const globalMatch = cheeseData.find(
      (cheese) => cheese.origin === "Global" &&
        (cheese.texture === texture || cheese.flavor === flavor || cheese.personality === personality)
    );

    const turkishMatch = cheeseData.find(
      (cheese) => cheese.origin === "Turkey" &&
        (cheese.texture === texture || cheese.flavor === flavor || cheese.personality === personality)
    );

    setResult({ global: globalMatch, turkish: turkishMatch });
  };

  if (result) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉 Congratulations!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '400px' }}>
          You found your perfect cheese match!
        </p>

        {/* Global Cheese */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '20px',
          width: '90%',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <img src={getCheeseImage(result.global?.name)} alt={result.global?.name} style={{ width: '100%', borderRadius: '15px', marginBottom: '15px' }} />
          <h2 style={{ fontSize: '1.5rem' }}>🧀 Global Cheese:</h2>
          <p>{result.global?.name}</p>
        </div>

        {/* Turkish Discovery */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '20px',
          width: '90%',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <img src={getCheeseImage(result.turkish?.name)} alt={result.turkish?.name} style={{ width: '100%', borderRadius: '15px', marginBottom: '15px' }} />
          <h2 style={{ fontSize: '1.5rem' }}>🇹🇷 Turkish Discovery:</h2>
          <p>{result.turkish?.name}</p>
        </div>

        {/* Share Buttons */}
        <a 
          href="https://api.whatsapp.com/send?text=I found my perfect cheese match with The Cheese Quiz! 🧀 Discover yours too at https://the-cheese-quiz.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            marginTop: '10px',
            marginBottom: '10px',
            backgroundColor: '#25D366',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'white'
          }}
        >
          📲 Share on WhatsApp
        </a>

        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            marginTop: '10px',
            marginBottom: '20px',
            backgroundColor: '#E1306C',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'white'
          }}
        >
          📸 Share on Instagram
        </a>

        {/* Try Again */}
        <button
          onClick={() => window.location.href = '/'}
          style={{
            backgroundColor: '#facc15',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🔁 Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${questions[currentQuestion].image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      
      {/* Şeffaf kutu */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '20px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        marginBottom: '20px'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          {questions[currentQuestion].question}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index}
              onClick={() => handleAnswer(option)}
              style={{
                padding: '12px 20px',
                backgroundColor: '#facc15',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={e => e.target.style.backgroundColor = '#fbbf24'}
              onMouseOut={e => e.target.style.backgroundColor = '#facc15'}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '80%',
        height: '10px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        overflow: 'hidden',
        position: 'absolute',
        top: '20px'
      }}>
        <div style={{
          width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          height: '100%',
          backgroundColor: '#facc15',
          transition: 'width 0.3s ease'
        }} />
      </div>

    </div>
  );
}
