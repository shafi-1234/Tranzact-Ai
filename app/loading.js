'use client';

import React from 'react';

const loading = () => {
  return (
    <div
      style={{
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', height: 100, gap: 8, marginBottom: 20 }}>
        {[30, 50, 70, 100, 80, 60].map((height, index) => (
          <div
            key={index}
            style={{
              width: 10,
              height: `${height}%`,
              background: 'linear-gradient(to top, #1e3a8a, #60a5fa)',
              animation: `grow 1.2s infinite ease-in-out`,
              animationDelay: `${index * 0.1}s`,
              transformOrigin: 'bottom',
            }}
            className="bar"
          />
        ))}
      </div>

      <div
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          opacity: 0,
          animation: 'fadeIn 1s ease-in-out forwards',
          animationDelay: '1s',
        }}
      >
        TRANZACT-AI
      </div>

      <div
        style={{
          fontFamily: "'Brush Script MT', cursive",
          fontSize: '1.2rem',
          marginTop: 10,
          opacity: 0,
          animation: 'fadeIn 1s ease-in-out forwards',
          animationDelay: '1.8s',
        }}
      >
        Track. Save. Grow
      </div>

      <style jsx>{`
        @keyframes grow {
          0%, 100% {
            transform: scaleY(0.8);
          }
          50% {
            transform: scaleY(1.2);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default loading;
