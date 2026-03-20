import React, { useState } from 'react';

export default function NikkiflixNicoleFinal() {
  const [active, setActive] = useState(false);

  const handleStart = () => {
    const msg = new SpeechSynthesisUtterance("Hi, I'm Nicole, your Nikki Flix host. Watch one ad to play. Remember, free sweeps have a twenty x play through. Let's get started!");
    window.speechSynthesis.speak(msg);
    setActive(true);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      {!active ? (
        <div style={{ textAlign: 'center', border: '2px solid #E50914', padding: '40px', borderRadius: '20px' }}>
          <div style={{ fontSize: '80px' }}>👩‍💼</div>
          <h1 style={{ color: '#E50914' }}>NIKKIFLIX</h1>
          <p>I'm Nicole. I have your 50,000 Coins ready.</p>
          <button 
            onClick={handleStart} 
            style={{ backgroundColor: '#E50914', color: '#fff', padding: '20px 40px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem' }}
          >
            CLICK TO START & HEAR RULES
          </button>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          <nav style={{ padding: '20px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ color: '#E50914', margin: 0 }}>NIKKIFLIX</h2>
            <div style={{ color: '#00FA9A' }}>SC: 1.00 🔒</div>
          </nav>
          <div style={{ padding: '50px', textAlign: 'center' }}>
             <h2>LOBBY UNLOCKED</h2>
             <p>Welcome back, Jerry. Ad loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}
