
import React, { useState } from 'react';

export default function NikkiflixPro() {
  const [unlocked, setUnlocked] = useState(false);

  const startNicole = () => {
    const msg = new SpeechSynthesisUtterance("Hi Jerry, I'm Nicole. Watch one ad to play. Remember the twenty x play through. Enjoy the game!");
    window.speechSynthesis.speak(msg);
    setUnlocked(true);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', margin: 0, overflow: 'hidden' }}>
      {!unlocked ? (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '100px', marginBottom: '10px' }}>👩‍💼</div>
          <h1 style={{ color: '#E50914', fontSize: '2.5rem', margin: '0 0 10px 0' }}>NIKKIFLIX</h1>
          <p style={{ maxWidth: '450px', fontSize: '1.1rem', color: '#ccc', lineHeight: '1.5' }}>
            "I'm Nicole, your host. Watch <b>one ad</b> to enter. <br/> 
            All free play carries a <b>20x playthrough</b> requirement."
          </p>
          <button 
            onClick={startNicole}
            style={{ backgroundColor: '#E50914', color: '#fff', border: 'none', padding: '20px 50px', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', marginTop: '30px' }}
          >
            START SESSION (WATCH AD)
          </button>
        </div>
      ) : (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <nav style={{ height: '60px', background: '#000', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', borderBottom: '2px solid #E50914' }}>
            <div style={{ color: '#E50914', fontSize: '24px', fontWeight: '900' }}>NIKKIFLIX</div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ color: '#FFD700', fontWeight: 'bold', border: '1px solid #333', padding: '5px 15px', borderRadius: '4px' }}>GC: 50,000</div>
              <div style={{ color: '#00FA9A', fontWeight: 'bold', border: '1px solid #333', padding: '5px 15px', borderRadius: '4px' }}>SC: 1.00 🔒</div>
            </div>
          </nav>
          <div style={{ flex: 1, width: '100%' }}>
            <iframe 
              src="https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs20sugarrush&gname=Sugar%20Rush&jurisdiction=99&lang=en&cur=USD" 
              style={{ width: '100%', height: '100%', border: 'none' }}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}


