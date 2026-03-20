import React from 'react';

export default function NikkiflixProDashboard() {
  const games = [
    { id: 1, name: 'Sugar Rush 1000', color: '#ff69b4', icon: '🍭' },
    { id: 2, name: 'Gates of Nikki', color: '#4da6ff', icon: '⚡' },
    { id: 3, name: 'Wolf Gold High Limit', color: '#ff9900', icon: '🐺' },
    { id: 4, name: 'Big Bass Splash', color: '#00cc66', icon: '🐟' },
  ];

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* AUTHENTIC PRO HEADER */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', backgroundColor: '#000', borderBottom: '1px solid #1a1a1a', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ color: '#E50914', fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-1.5px', margin: 0 }}>NIKKIFLIX</h1>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ background: '#111', padding: '6px 16px', borderRadius: '4px', border: '1px solid #333' }}>
            <div style={{ fontSize: '9px', color: '#888', fontWeight: 'bold' }}>GOLD COINS</div>
            <div style={{ fontWeight: '600', color: '#FFD700' }}>50,000.00</div>
          </div>
          <div style={{ background: '#111', padding: '6px 16px', borderRadius: '4px', border: '1px solid #333' }}>
            <div style={{ fontSize: '9px', color: '#888', fontWeight: 'bold' }}>SWEEPS</div>
            <div style={{ fontWeight: '600', color: '#00FA9A' }}>5.00</div>
          </div>
          <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#E50914', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>J</div>
        </div>
      </nav>

      {/* FEATURED SECTION */}
      <div style={{ padding: '30px' }}>
        <div style={{ width: '100%', height: '300px', borderRadius: '12px', background: 'linear-gradient(to right, #000, transparent), url("https://images.unsplash.com/photo-1596778402284-8398c7b09521?auto=format&fit=crop&w=1200&q=80")', backgroundSize: 'cover', display: 'flex', alignItems: 'center', padding: '40px', marginBottom: '40px', border: '1px solid #222' }}>
           <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>NIKKIFLIX ORIGINALS</h2>
             <p style={{ color: '#ccc', maxWidth: '400px' }}>High volatility. Instant payouts. No generic limits.</p>
             <button style={{ backgroundColor: '#fff', color: '#000', border: 'none', padding: '12px 30px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>Enter Gaming Room</button>
           </div>
        </div>

        {/* PRO GAME ROW */}
        <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#eee' }}>Top Picks For You</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' }}>
          {games.map(game => (
            <div key={game.id} style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ width: '100%', height: '320px', backgroundColor: '#151515', border: '1px solid #222', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem' }}>{game.icon}</span>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '15px', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                   <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{game.name}</div>
                   <div style={{ color: '#E50914', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '5px' }}>LIVE NOW</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

