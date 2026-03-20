import React, { useState } from 'react';

export default function NikkiflixCleanNicole() {
  const [showNicole, setShowNicole] = useState(true);

  const startNicole = () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Hi, I'm Nicole, your Nikki Flix host. Watch one ad to play all day. Your 1 dollar Sweeps is a gift with a 20x playthrough. Let's go!";
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
    setShowNicole(false);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
      
      {showNicole ? (
        <div style={{ padding: '100px 20px', backgroundColor: '#111', minHeight: '100vh', border: '5px solid #E50914' }}>
          <div style={{ fontSize: '100px' }}>👩‍💼</div>
          <h1 style={{ color: '#E50914' }}>WELCOME TO NIKKIFLIX</h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc' }}>"I'm Nicole. I'll be your guide to the games."</p>
          <div style={{ marginTop: '30px' }}>
            <button 
              onClick={startNicole}
              style={{ backgroundColor: '#E50914', color: '#fff', padding: '20px 40px', fontSize: '1.5rem', fontWeight: 'bold', borderRadius: '10px', cursor: 'pointer', border: 'none' }}
            >
              CLICK TO START & HEAR RULES
            </button>
          </div>
        </div>
      ) : (
        <div>
          <nav style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ color: '#E50914', margin: 0 }}>NIKKIFLIX</h2>
            <div>SC: 1.00 🔒</div>
          </nav>
          <div style={{ padding: '50px' }}>
            <h3>LOBBY OPEN</h3>
            <p>Nicole has authorized your session. Ad loading...</p>
          </div>
        </div>
      )}

    </div>
  );
}
d
