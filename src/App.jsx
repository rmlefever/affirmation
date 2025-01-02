import React, { useState } from 'react';

    const affirmations = [
      "You are capable of amazing things.",
      "Your potential is limitless.",
      "You are worthy of love and respect.",
      "Every day is a new opportunity.",
      "You are stronger than you think.",
      "You are making progress every day.",
      "You deserve happiness and success.",
      "Your challenges are helping you grow.",
      "You are enough just as you are.",
      "You are creating a bright future."
    ];

    export default function App() {
      const [affirmation, setAffirmation] = useState("Click the button for an affirmation!");

      const getRandomAffirmation = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        setAffirmation(affirmations[randomIndex]);
      };

      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Random Affirmation Generator</h1>
          <p style={{ fontSize: '1.5rem', margin: '20px' }}>{affirmation}</p>
          <button 
            onClick={getRandomAffirmation}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Get Affirmation
          </button>
        </div>
      );
    }
