// 📄 quiz.js (toparlanmış, tam çalışan sürüm)
import { useState, useEffect } from 'react';
import ShareResult from '../components/ShareResult';

const cheeses = [
  {
    name: "Brie",
    texture: "Soft",
    flavor: "Mild",
    personality: "Elegant",
    occasion: "Fancy Dinner",
    pairing: "Pair with wine",
    tradition: "Modern",
    image: "/images/cheeses/brie.jpg"
  },
  {
    name: "Cheddar",
    texture: "Firm",
    flavor: "Sharp",
    personality: "Classic",
    occasion: "Everyday",
    pairing: "Eat alone",
    tradition: "Traditional",
    image: "/images/cheeses/cheddar.jpg"
  },
  // ... diğer peynirleri buraya ekle
];

function findBestCheese(userAnswers) {
  let maxScore = -1;
  let bestCheeses = [];

  cheeses.forEach((cheese) => {
    let score = 0;
    if (cheese.texture === userAnswers.texture) score++;
    if (cheese.flavor === userAnswers.flavor) score++;
    if (cheese.personality === userAnswers.personality) score++;
    if (cheese.occasion === userAnswers.occasion) score++;
    if (cheese.pairing === userAnswers.pairing) score++;
    if (cheese.tradition === userAnswers.tradition) score++;

    if (score > maxScore) {
      maxScore = score;
      bestCheeses = [cheese];
    } else if (score === maxScore) {
      bestCheeses.push(cheese);
    }
  });

  const randomIndex = Math.floor(Math.random() * bestCheeses.length);
  return bestCheeses[randomIndex];
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [knowledgeCorrect, setKnowledgeCorrect] = useState(0);

  const handleAnswer = (value) => {
    const current = questions[step];
    const updated = { ...answers, [current.key]: value };
    setAnswers(updated);

    if (current.isKnowledge) {
      if (value === current.correct) {
        setKnowledgeCorrect((prev) => prev + 1);
      }
    }

    if (step === questions.length - 1) {
      const cheese = findBestCheese(updated);
      setSelectedCheese(cheese);
    } else {
      setStep(step + 1);
    }
  };

  const questions = [
    { key: "texture", question: "What texture do you prefer?", options: ["Soft", "Firm", "Crumbly", "Hard"], image: "/images/questions/texture.jpg" },
    { key: "flavor", question: "Choose your flavor profile:", options: ["Mild", "Sharp", "Sweet", "Salty"], image: "/images/questions/flavor.jpg" },
    { key: "personality", question: "What personality fits your taste?", options: ["Elegant", "Rustic", "Playful", "Sophisticated"], image: "/images/questions/personality.jpg" },
    { key: "occasion", question: "When would you enjoy cheese the most?", options: ["Everyday", "Fancy Dinner"], image: "/images/questions/occasion.jpg" },
    { key: "pairing", question: "How would you enjoy it?", options: ["Eat alone", "Pair with wine"], image: "/images/questions/pairing.jpg" },
    { key: "tradition", question: "Do you prefer modern or traditional?", options: ["Modern", "Traditional"], image: "/images/questions/tradition.jpg" },
    { key: "k1", question: "Which country is famous for Roquefort?", options: ["France", "Italy", "Germany", "UK"], correct: "France", isKnowledge: true },
    { key: "k2", question: "What milk is used in feta?", options: ["Goat", "Cow", "Buffalo", "Sheep"], correct: "Sheep", isKnowledge: true },
    { key: "k3", question: "Which cheese is grilled:", options: ["Brie", "Cheddar", "Halloumi", "Mozzarella"], correct: "Halloumi", isKnowledge: true },
    { key: "k4", question: "Which one is a blue cheese?", options: ["Camembert", "Stilton", "Feta", "Gouda"], correct: "Stilton", isKnowledge: true },
  ];

  if (selectedCheese) {
    return (
      <ShareResult
        globalCheese={selectedCheese}
        turkishCheese={{ name: 'Ezine White Cheese', image: '/images/cheeses/ezine.jpg' }}
        correctAnswers={knowledgeCorrect}
      />
    );
  }

  const current = questions[step];

  return (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{current.question}</h2>

    {current.image && (
      <img
        src={current.image}
        alt={current.key}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: 'auto',
          margin: '0 auto 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      />
    )}

    <div style={{
      display: 'grid',
      gridTemplateColumns: current.options.length <= 4 ? '1fr 1fr' : '1fr 1fr 1fr',
      gap: '1rem',
      justifyContent: 'center',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      {current.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          style={{
            padding: '1rem',
            fontSize: '1rem',
            backgroundColor: '#facc15',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

