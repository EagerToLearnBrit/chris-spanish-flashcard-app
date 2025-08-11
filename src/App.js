import React, { useState } from "react";

const flashcards = [
  { spanish: "Hola", english: "Hello" },
  { spanish: "Gracias", english: "Thank you" },
  { spanish: "Perro", english: "Dog" },
  { spanish: "Gato", english: "Cat" },
  { spanish: "Casa", english: "House" }
];

function getRandomCard() {
  return flashcards[Math.floor(Math.random() * flashcards.length)];
}

function App() {
  const [card, setCard] = useState(getRandomCard());
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setCard(getRandomCard());
    setShowAnswer(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Spanish Flashcard App</h1>
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "2rem",
        display: "inline-block",
        minWidth: "200px"
      }}>
        <h2>{card.spanish}</h2>
        {showAnswer ? (
          <p style={{ fontSize: "1.2rem", color: "green" }}>{card.english}</p>
        ) : (
          <button onClick={() => setShowAnswer(true)}>Show Answer</button>
        )}
        <br />
        <button style={{ marginTop: "1rem" }} onClick={nextCard}>
          Next Card
        </button>
      </div>
    </div>
  );
}

export default App;
