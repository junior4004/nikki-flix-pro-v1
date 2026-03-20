
import React, { useState } from 'react';

export default function NikkiflixCompleteSystem() {
  const [view, setView] = useState('landing'); 
  const [scBalance, setScBalance] = useState(1.00);
  const [gcBalance, setGcBalance] = useState(50000);

  const speak = (text) => {
    if (typeof window !== 'undefined') {
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = 0.85;
      window.speechSynthesis.speak(msg);
    }
  };

  const launchSystem = () => {
    speak("System 2026 Online. Hi Jerry, I'm Nicole. All rooms are now active. 20x playthrough is locked.");
    setView('theater');
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', height: '100vh', width: '100vw', fontFamily: 'sans-serif', margin: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      
      {view === 'landing' && (
        <div style={fullOverlay}>
          <div style={{ fontSize: '120px', textShadow: '0 0 20px #E50914' }}>👩‍💼</div>
          <h1 style={{ color: '#E50914', fontSize: '3.5rem', letterSpacing: '5px', margin: '20px 0' }}>NIKKIFLIX PRO 2026</h1>
          <p style={{ color: '#666', fontSize: '1.2rem' }}>CASINO | THEATER | POKER | ADULT | RADIO</p>
          <button onClick={launchSystem} style={powerBtn}>INITIALIZE SYSTEM</button>
        </div>
      )}

      {view !== 'landing' && (
        <>
          <header style={headerStyle}>
            <div style={logo}>NIKKIFLIX <span style={{fontSize:'12px', color:'#555'}}>v1.0</span></div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={statBox}><span style={{color:'#FFD700'}}>GC</span> {gcBalance.toLocaleString()}</div>
              <div style={statBox}><span style={{color:'#00FA9A'}}>SC</span> {scBalance.toFixed(2)} 🔒</div>
              <button style={depositBtn}>BUY COINS</button>
            </div>
          </header>

          <div style={{ display: 'flex', flex: 1 }}>
            <nav style={sidebarStyle}>
              <button title="Theater" onClick={() => setView('theater')} style={view === 'theater' ? activeNav : navIcon}>🎬</button>
              <button title="Casino" onClick={() => setView('casino')} style={view === 'casino' ? activeNav : navIcon}>🎰</button>
              <button title="Poker Rooms" onClick={() => setView('poker')} style={view === 'poker' ? activeNav : navIcon}>♠️</button>
              <button title="Radio/Social" onClick={() => setView('social')} style={view === 'social' ? activeNav : navIcon}>📻</button>
              <button title="Adult" onClick={() => setView('adult')} style={view === 'adult' ? activeNav : navIcon}>🔞</button>
            </nav>

            <main style={{ flex: 1, position: 'relative', background: 'radial-gradient(circle, #111 0%, #000 100%)' }}>
              
              {view === 'theater' && (
                <div style={roomPadding}>
                  <h2 style={roomTitle}>PREMIUM MOVIE THEATER</h2>
                  <div style={grid}>
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} style={mediaCard}>MOVIE {i} <br/><span style={{fontSize:'10px', color:'#E50914'}}>WATCH TO EARN SC</span></div>
                    ))}
                  </div>
                </div>
              )}

              {view === 'casino' && (
                <iframe src="https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs20sugarrush&gname=Sugar%20Rush&jurisdiction=99&lang=en&cur=USD" style={iframeStyle} />
              )}

              {view === 'poker' && (
                <div style={roomPadding}>
                  <h2 style={roomTitle}>3D TALKING TABLES</h2>
                  <div style={tableGrid}>
                    <div style={pokerTable}>TABLE 1: TEXAS HOLDEM <br/> <span style={{color:'#00FA9A'}}>VOICE ON</span></div>
                    <div style={pokerTable}>TABLE 2: BLACKJACK <br/> <span style={{color:'#00FA9A'}}>AUTO-PLAY</span></div>
                  </div>
                </div>
              )}

              {view === 'adult' && (
                <div style={roomPadding}>
                  <h2 style={roomTitle}>PREMIUM ADULT CONTENT</h2>
                  <div style={lockScreen}>AGE VERIFICATION REQUIRED</div>
                </div>
              )}

              {view === 'social' && (
                <div style={{ display: 'flex', height: '100%' }}>
                  <div style={{ flex: 1, padding: '30px' }}>
                    <h3 style={roomTitle}>GLOBAL CHAT</h3>
                    <div style={chatBox}>
                      <p><span style={{color:'#E50914'}}>Nicole:</span> Welcome Jerry. Automated play is ready.</p>
                      <p><span style={{color:'#00FA9A'}}>System:</span> Player 77 just hit 500x on Slots.</p>
                    </div>
                  </div>
                  <div style={radioSidebar}>
                    <h3>RADIO STATIONS</h3>
                    <button style={radioBtn}>🎵 90.1: HIP HOP</button>
                    <button style={radioBtn}>🎵 102.5: CASINO CLASSICS</button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </>
      )}
    </div>
  );
}

const fullOverlay = { position: 'fixed', inset: 0, background: '#000', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' };
const powerBtn = { background: '#E50914', color: '#fff', border: 'none', padding: '25px 80px', fontSize: '1.8rem', fontWeight: '900', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 0 30px #E50914', marginTop: '40px' };
const headerStyle = { height: '70px', background: '#080808', borderBottom: '2px solid #E50914', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 30px' };
const logo = { color: '#E50914', fontSize: '28px', fontWeight: '900', letterSpacing: '4px' };
const statBox = { background: '#1a1a1a', padding: '8px 15px', borderRadius: '4px', border: '1px solid #333', fontSize: '14px', fontWeight: 'bold' };
const depositBtn = { background: '#FFD700', color: '#000', border: 'none', padding: '8px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };
const sidebarStyle = { width: '90px', background: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 0', borderRight: '1px solid #222' };
const navIcon = { background: 'none', border: 'none', fontSize: '32px', margin: '20px 0', cursor: 'pointer', opacity: '0.4' };
const activeNav = { ...navIcon, opacity: '1', filter: 'drop-shadow(0 0 10px #E50914)' };
const iframeStyle = { width: '100%', height: '100%', border: 'none' };
const roomPadding = { padding: '40px' };
const roomTitle = { fontSize: '2rem', marginBottom: '30px', borderLeft: '5px solid #E50914', paddingLeft: '15px' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '25px' };
const mediaCard = { height: '320px', background: '#111', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', textAlign: 'center' };
const tableGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' };
const pokerTable = { height: '250px', background: 'radial-gradient(circle, #004400 0%, #002200 100%)', border: '5px solid #555', borderRadius: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' };
const lockScreen = { height: '300px', background: '#000', border: '2px dashed #E50914', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#555' };
const chatBox = { height: '400px', background: '#050505', border: '1px solid #222', padding: '20px', borderRadius: '8px', overflowY: 'auto' };
const radioSidebar = { width: '320px', background: '#080808', padding: '30px', borderLeft: '1px solid #222' };
const radioBtn = { width: '100%', padding: '15px', background: '#111', border: '1px solid #333', color: '#fff', marginBottom: '15px', borderRadius: '8px', textAlign: 'left', cursor: 'pointer' };
