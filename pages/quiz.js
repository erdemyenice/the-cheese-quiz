import { useState } from 'react';
import ShareResult from '../components/ShareResult';

const questions = [
  { question: "What's your ideal cheese texture?", options: ["Soft", "Firm", "Crumbly", "Stringy", "Hard", "Creamy"], image: "/images/texture.jpg", type: "choice" },
  { question: "Which flavor do you prefer?", options: ["Mild", "Sharp", "Nutty", "Strong", "Light", "Sour"], image: "/images/flavor.jpg", type: "choice" },
  { question: "How would you describe your food personality?", options: ["Elegant", "Classic", "Rustic", "Playful", "Healthy", "Smoky"], image: "/images/personality.jpg", type: "choice" },
  { question: "How do you usually enjoy cheese?", options: ["On its own", "In a salad", "With bread", "Melted", "With wine", "With fruits"], image: "/images/enjoy.jpg", type: "choice" },
  { question: "Which region's food do you like most?", options: ["Mediterranean", "French", "British", "Middle Eastern", "Asian", "American"], image: "/images/region.jpg", type: "choice" },
  { question: "Which milk type do you prefer?", options: ["Cow", "Sheep", "Goat", "Buffalo", "Plant-based"], image: "/images/milk.jpg", type: "choice" },
  { question: "Favorite drink with cheese?", options: ["Red Wine", "White Wine", "Beer", "Tea", "Water", "Juice"], image: "/images/drink.jpg", type: "choice" },
  { question: "Ideal side food with cheese?", options: ["Bread", "Crackers", "Fruits", "Vegetables", "Nuts", "Meats"], image: "/images/side.jpg", type: "choice" },
  { question: "How do you like your cheese served?", options: ["Cold", "Room Temperature", "Melted", "Grilled", "Baked"], image: "/images/serve.jpg", type: "choice" },
  { question: "Where do you usually eat cheese?", options: ["At a party", "Picnic", "Restaurant", "Home", "Gourmet tasting", "Street food"], image: "/images/place.jpg", type: "choice" },
  { question: "Which color do you associate with your perfect cheese?", options: ["White", "Yellow", "Orange", "Blue", "Green", "Brown"], image: "/images/color.jpg", type: "choice" },
  { question: "In which country did feta cheese originate?", options: ["Greece", "France", "Italy", "Turkey", "Spain"], image: "/images/feta.jpg", type: "knowledge", correctAnswer: "Greece" },
  { question: "Which cheese is traditionally made with mold?", options: ["Blue Cheese", "Mozzarella", "Ricotta", "Cheddar", "Halloumi"], image: "/images/blue.jpg", type: "knowledge", correctAnswer: "Blue Cheese" },
  { question: "What milk is traditionally used in Parmesan cheese?", options: ["Cow Milk", "Goat Milk", "Sheep Milk", "Buffalo Milk", "Plant-based Milk"], image: "/images/parmesan.jpg", type: "knowledge", correctAnswer: "Cow Milk" },
  { question: "Which country is famous for Manchego cheese?", options: ["Spain", "Italy", "France", "Germany", "Turkey"], image: "/images/manchego.jpg", type: "knowledge", correctAnswer: "Spain" }
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
  const [knowledgeScore, setKnowledgeScore] = useState(0);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);

    const currentQ = questions[currentQuestion];
    if (currentQ.type === "knowledge" && option === currentQ.correctAnswer) {
      setKnowledgeScore(prev => prev + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
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
      <ShareResult 
        globalCheese={{
          name: result.global?.name,
          image: getCheeseImage(result.global?.name)
        }}
        turkishCheese={{
          name: result.turkish?.name,
          image: getCheeseImage(result.turkish?.name)
        }}
        knowledgeScore={knowledgeScore}
        totalKnowledge={4}
      />
    );
  }

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
      
      {/* Question Image */}
      <img
        src={questions[currentQuestion].image}
        alt="Question Visual"
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '20px',
          marginBottom: '20px'
        }}
      />

      {/* Question Text */}
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
        {questions[currentQuestion].question}
      </h2>

      {/* Options Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
        marginTop: '20px',
        width: '100%',
        maxWidth: '400px'
      }}>
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index}
            onClick={() => handleAnswer(option)}
            style={{
              padding: '12px 10px',
              backgroundColor: '#facc15',
              border: 'none',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s',
              minHeight: '50px'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#fbbf24'}
            onMouseOut={e => e.target.style.backgroundColor = '#facc15'}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Previous Button */}
      {currentQuestion > 0 && (
        <button
          onClick={handlePrevious}
          style={{
            marginTop: '20px',
            backgroundColor: '#e0e0e0',
            border: 'none',
            borderRadius: '9999px',
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          ⬅️ Previous
        </button>
      )}

      {/* Progress Bar */}
      <div style={{
        marginTop: '20px',
        width: '80%',
        height: '10px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        overflow: 'hidden'
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
