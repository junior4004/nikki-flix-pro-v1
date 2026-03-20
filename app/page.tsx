import React, { useState, useEffect } from 'react';

export default function NikkiflixWithNicole() {
  const [showHost, setShowHost] = useState(true);

  // THIS IS THE AI VOICE TRIGGER
  const speakWelcome = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Hi, I'm Nicole, your Nikki Flix host. Welcome! Here is the deal: Watch one ad to enter your game, and that is it. No interruptions while you play. Your 1 dollar Sweeps is a gift, but remember there is a 20x playthrough before cashing out. We keep it real here. Ready to spin?";
    msg.rate = 0.9; // Professional, steady pace
    msg.pitch = 1.1; // Friendly female tone
    window.speechSynthesis.speak(msg);
  };

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* NICOLE VIRTUAL HOST */}
      {showHost && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#111', color: '#fff', padding: '30px', borderRadius: '20px', border: '3px solid #E50914', maxWidth: '500px', textAlign: 'center' }}>
            <div style={{ fontSize: '100px', marginBottom: '10px' }}>👩‍💼</div>
            <h2 style={{ color: '#E50914', margin: '0 0 10px 0' }}>MEET NICOLE</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#ccc' }}>
              "Welcome! I'm your host. Watch <b>one ad</b> for unlimited play. 
              Your $1 SC is ready, but a <b>20x playthrough</b> applies to all freebies. Let's keep it fair and fun!"
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <button 
                onClick={() => { speakWelcome(); }}
                style={{ backgroundColor: '#444', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                🔊 HEAR NICOLE EXPLAIN RULES
              </button>
              
              <button 
                onClick={() => setShowHost(false)}
                style={{ backgroundColor: '#E50914', color: '#fff', border: 'none', padding: '15px', borderRadius: '5px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
              >
                START PLAYING (Watch Ad)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER & LOBBY (Blurred until Nicole is dismissed) */}
      <div style={{ filter: showHost ? 'blur(5px)' : 'none', transition: '0.3s' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 25px', backgroundColor: '#000', borderBottom: '1px solid #222' }}>
          <h1 style={{ color: '#E50914', margin: 0 }}>NIKKIFLIX</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
             <span style={{ border: '1px solid #FFD700', padding: '4px 10px', borderRadius: '4px', color: '#FFD700' }}>GC: 50,000</span>
             <span style={{ border: '1px solid #00FA9A', padding: '4px 10px', borderRadius: '4px', color: '#00FA9A' }}>SC: 1.00 🔒</span>
          </div>
        </nav>

        <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
           {/* Placeholder Game Cards */}
           {[1,2,3,4].map(i => (
             <div key={i} style={{ height: '250px', backgroundColor: '#111', borderRadius: '10px', border: '1px solid #222' }}></div>
           ))}
        </div>
      </div>
    </div>
  );
}

