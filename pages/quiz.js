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
        backgroundColor: '#fef9c3',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem' }}>🎯 Your Perfect Cheese Match!</h2>
        <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>🧀 {result.global?.name || "Brie"}</p>
        <h3 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>🇹🇷 Turkish Discovery:</h3>
        <p style={{ fontSize: '1.5rem' }}>🧀 {result.turkish?.name || "Ezine White Cheese"}</p>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            marginTop: '2rem',
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
