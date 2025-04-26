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

// Yardımcı fonksiyon: Peynir ismine göre görsel yolu bulur
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

        {/* Global Cheese Match */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '20px',
          width: '90%',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <img 
            src={getCheeseImage(result.global?.name)} 
            alt={result.global?.name} 
            style={{ width: '100%', borderRadius: '15px', marginBottom: '15px' }}
          />
          <h2 style={{ fontSize: '1.5rem' }}>🧀 Global Cheese:</h2>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>{result.global?.name || "Brie"}</p>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            Texture: {result.global?.texture || "Soft"}<br />
            Flavor: {result.global?.flavor || "Mild"}<br />
            Personality: {result.global?.personality || "Elegant"}
          </p>
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
          <img 
            src={getCheeseImage(result.turkish?.name)} 
            alt={result.turkish?.name} 
            style={{ width: '100%', borderRadius: '15px', marginBottom: '15px' }}
          />
          <h2 style={{ fontSize: '1.5rem' }}>🇹🇷 Turkish Discovery:</h2>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>{result.turkish?.name || "Ezine White Cheese"}</p>
          <p style={{ fontSize: '1rem', color: '#555' }}>
            Texture: {result.turkish?.texture || "Crumbly"}<br />
            Flavor: {result.turkish?.flavor || "Salty"}<br />
            Personality: {result.turkish?.personality || "Authentic"}
          </p>
        </div>

        {/* Try Again Button */}
        <button
          onClick={() => window.location.href = '/'}
          style={{
            marginTop: '20px',
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
          🔁 Try Again / Discover More
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#fef9c3',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* Progress Bar */}
      <div style={{
        width: '80%',
        height: '10px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        marginBottom: '20px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${((currentQuestion + 1) / questions.length) * 100}%`,
          height: '100%',
          backgroundColor: '#facc15',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {/* Image */}
      <img
        src={questions[currentQuestion].image}
        alt="Question Visual"
        style={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto',
          borderRadius: '20px',
          marginBottom: '20px'
        }}
      />

      {/* Question */}
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{questions[currentQuestion].question}</h2>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '300px' }}>
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
  );
}
