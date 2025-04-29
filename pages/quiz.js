import { useState, useEffect } from 'react';

// 🧀 Peynir Listesi
const cheeses = [
  {
    name: "Brie",
    texture: "Soft",
    flavor: "Mild",
    personality: "Elegant",
    occasion: "Fancy Dinner",
    pairing: "Pair with wine",
    tradition: "Modern"
  },
  {
    name: "Camembert",
    texture: "Soft",
    flavor: "Earthy",
    personality: "Sophisticated",
    occasion: "Fancy Dinner",
    pairing: "Pair with wine",
    tradition: "Traditional"
  },
  // ➡️ BURADA DİĞER 18 PEYNİRİ DEVAM EDECEKSİN
];

// 🧠 Peynir Bulan Fonksiyon
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

// 🧀 Ana Quiz Component
export default function Quiz() {
  const [step, setStep] = useState(0); // Hangi soruda olduğumuz
  const [userAnswers, setUserAnswers] = useState({}); // Kullanıcının cevapları
  const [selectedCheese, setSelectedCheese] = useState(null); // Sonuç peyniri

  // Kullanıcı cevap verdiğinde kayıt
  const handleAnswer = (key, value) => {
    setUserAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  // Tüm sorular cevaplandığında peyniri bul
  useEffect(() => {
    if (step === 6) { // 6 soru bittiğinde
      const result = findBestCheese(userAnswers);
      setSelectedCheese(result);
    }
  }, [step]);

  // Soru listesi
  const questions = [
    { key: 'texture', question: "Choose your texture:", options: ["Soft", "Firm", "Crumbly", "Hard"] },
    { key: 'flavor', question: "Choose your flavor:", options: ["Mild", "Sharp", "Sweet", "Salty"] },
    { key: 'personality', question: "Choose your personality:", options: ["Elegant", "Rustic", "Playful", "Sophisticated"] },
    { key: 'occasion', question: "When would you eat it?", options: ["Everyday", "Fancy Dinner"] },
    { key: 'pairing', question: "How would you eat it?", options: ["Eat alone", "Pair with wine"] },
    { key: 'tradition', question: "Style?", options: ["Modern", "Traditional"] },
  ];

  if (step < 6) {
    const currentQuestion = questions[step];
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map(option => (
          <button key={option} onClick={() => handleAnswer(currentQuestion.key, option)} style={{ margin: 10, padding: 10 }}>
            {option}
          </button>
        ))}
      </div>
    );
  }

  if (selectedCheese) {
    return (
      <div style={{ textAlign: 'center', padding: 20 }}>
        <h2>Your Perfect Cheese:</h2>
        <h1>{selectedCheese.name}</h1>
        <p>Texture: {selectedCheese.texture}</p>
        <p>Flavor: {selectedCheese.flavor}</p>
        <p>Personality: {selectedCheese.personality}</p>
        {/* İstersen resim de ekleriz burada */}
      </div>
    );
  }

  return <div>Loading...</div>;
}
