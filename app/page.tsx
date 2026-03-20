import React from 'react';

export default function NikkiflixFullSite() {
  const games = [
    { id: 1, name: 'Sugar Rush', img: '🍭' },
    { id: 2, name: 'Gates of Nikki', img: '⚡' },
    { id: 3, name: 'Wolf Gold', img: '🐺' },
    { id: 4, name: 'Big Bass', img: '🐟' },
  ];

  return (
    <div style={{ backgroundColor: '#0b0b0b', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', backgroundColor: '#000', borderBottom: '1px solid #222' }}>
        <h1 style={{ color: '#E50914', fontSize: '1.8rem', fontWeight: '900' }}>NIKKIFLIX</h1>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ background: '#1a1a1a', padding: '5px 15px', borderRadius: '5px', border: '1px solid #FFD700' }}>
            <div style={{ fontSize: '10px', color: '#FFD700' }}>GOLD COINS</div>
            <div style={{ fontWeight: 'bold' }}>1,000,000.00</div>
          </div>
          <div style={{ background: '#1a1a1a', padding: '5px 15px', borderRadius: '5px', border: '1px solid #00FA9A' }}>
            <div style={{ fontSize: '10px', color: '#00FA9A' }}>SWEEPS</div>
            <div style={{ fontWeight: 'bold' }}>25.00</div>
          </div>
        </div>
      </nav>

      <div style={{ padding: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Recommended For Jerry</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {games.map(game => (
            <div key={game.id} style={{ backgroundColor: '#1a1a1a', height: '280px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #333' }}>
              <div style={{ fontSize: '4rem' }}>{game.img}</div>
              <div style={{ marginTop: '15px', fontWeight: 'bold' }}>{game.name}</div>
              <button style={{ marginTop: '20px', backgroundColor: '#E50914', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>PLAY NOW</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

