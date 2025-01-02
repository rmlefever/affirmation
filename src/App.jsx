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
      "You are creating a bright future.",
      "You are a magnet for positive energy.",
      "Your confidence grows with every step you take.",
      "You are surrounded by abundance and prosperity.",
      "You are a beacon of light and positivity.",
      "Your dreams are within reach.",
      "You are resilient and can overcome any obstacle.",
      "You are a source of inspiration to others.",
      "Your mind is full of brilliant ideas.",
      "You are in control of your happiness.",
      "You are a powerful creator of your reality.",
      "You are deserving of all the good things in life.",
      "You are constantly evolving and improving.",
      "You are a force of nature.",
      "You are aligned with your purpose.",
      "You are a magnet for miracles.",
      "You are a masterpiece in progress.",
      "You are a gift to the world.",
      "You are a champion of your own life.",
      "You are a magnet for success and abundance.",
      "You are a radiant being of light and love."
    ];

    export default function App() {
      const [affirmation, setAffirmation] = useState("Click the button for an affirmation!");

      const getRandomAffirmation = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        setAffirmation(affirmations[randomIndex]);
      };

      return (
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f0f8ff',
          minHeight: '100vh',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '30px',
            fontWeight: 'bold'
          }}>
            Random Affirmation Generator
          </h1>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '1.5rem',
              color: '#34495e',
              margin: '20px 0',
              lineHeight: '1.6'
            }}>
              {affirmation}
            </p>
            <button 
              onClick={getRandomAffirmation}
              style={{
                padding: '15px 30px',
                fontSize: '1rem',
                borderRadius: '25px',
                cursor: 'pointer',
                backgroundColor: '#3498db',
                color: '#ffffff',
                border: 'none',
                transition: 'background-color 0.3s ease',
                marginTop: '20px'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              Get Affirmation
            </button>
          </div>
        </div>
      );
    }
