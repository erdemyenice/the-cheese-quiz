// 📄 quiz.js (tasarımı korunmuş, algoritması entegre edilmiş sürüm)

import { useState, useEffect } from 'react';
import ShareResult from '@/components/ShareResult';

// 🧀 20 peynirlik veri (kısaltılmış örnek; tam listeyi genişlet)
const cheeses = [
  {
    name: 'Brie',
    texture: 'Soft',
    flavor: 'Mild',
    personality: 'Elegant',
    occasion: 'Fancy Dinner',
    pairing: 'Pair with wine',
    tradition: 'Modern',
    image: '/images/cheeses/brie.jpg'
  },
  {
    name: 'Cheddar',
    texture: 'Firm',
    flavor: 'Sharp',
    personality: 'Classic',
    occasion: 'Everyday',
    pairing: 'Eat alone',
    tradition: 'Traditional',
    image: '/images/cheeses/cheddar.jpg'
  },
  // ... diğer 18 peynir
];

// 🎯 En uygun peyniri bulan fonksiyon
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

  const handleAnswer = (value) => {
    const currentKey = questions[step].key;
    const updated = { ...answers, [currentKey]: value };
    setAnswers(updated);
    if (step === questions.length - 1) {
      const cheese = findBestCheese(updated);
      setSelectedCheese(cheese);
    } else {
      setStep(step + 1);
    }
  };

  const questions = [
    {
      key: 'texture',
      question: 'What texture do you prefer?',
      options: ['Soft', 'Firm', 'Crumbly', 'Hard'],
      image: '/images/questions/texture.jpg'
    },
    {
      key: 'flavor',
      question: 'Choose your flavor profile:',
      options: ['Mild', 'Sharp', 'Sweet', 'Salty'],
      image: '/images/questions/flavor.jpg'
    },
    {
      key: 'personality',
      question: 'What personality fits your taste?',
      options: ['Elegant', 'Rustic', 'Playful', 'Sophisticated'],
      image: '/images/questions/personality.jpg'
    },
    {
      key: 'occasion',
      question: 'When would you enjoy cheese the most?',
      options: ['Everyday', 'Fancy Dinner'],
      image: '/images/questions/occasion.jpg'
    },
    {
      key: 'pairing',
      question: 'How would you enjoy it?',
      options: ['Eat alone', 'Pair with wine'],
      image: '/images/questions/pairing.jpg'
    },
    {
      key: 'tradition',
      question: 'Do you prefer modern or traditional?',
      options: ['Modern', 'Traditional'],
      image: '/images/questions/tradition.jpg'
    }
  ];

  if (selectedCheese) {
    return (
      <ShareResult
        globalCheese={selectedCheese}
        turkishCheese={{ name: 'Ezine White Cheese', image: '/images/cheeses/ezine.jpg' }}
      />
    );
  }

  const current = questions[step];

  return (
    <div className="quiz-step" style={{ textAlign: 'center', padding: 20 }}>
      <h2>{current.question}</h2>
      <img
        src={current.image}
        alt={current.key}
        style={{ maxWidth: '100%', height: 'auto', marginBottom: 20 }}
      />
      <div>
        {current.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            style={{ margin: 10, padding: 10 }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
