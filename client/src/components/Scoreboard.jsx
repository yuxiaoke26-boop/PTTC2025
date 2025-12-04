import React from 'react';

const Scoreboard = () => {
  // 这里的数据可以是静态的，或者通过 fetch 获取
  return (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ borderLeft: '5px solid #1a237e', paddingLeft: '10px' }}>Real-time Battle</h2>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* 乒乓球比分卡片 */}
        <div style={{ flex: 1, border: '2px solid #1a237e', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
          <div style={{ background: '#e91e63', color: 'white', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginBottom: '10px' }}>Table Tennis - Final</div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
              <h3>Marcus</h3>
              <p>🇬🇧 GBR</p>
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#e91e63' }}>11 : 09</div>
            <div>
              <h3>John</h3>
              <p>🏴󠁧󠁢󠁳󠁣󠁴󠁿 SCO</p>
            </div>
          </div>
          <p style={{ color: '#666' }}>Set 5 - Match Point</p>
        </div>

        {/* 高地运动会比分卡片 - 体现混合主题 */}
        <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '10px', padding: '20px', textAlign: 'center', background: '#f5f5f5' }}>
          <div style={{ background: '#1a237e', color: 'white', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginBottom: '10px' }}>Caber Toss - Round 2</div>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
              <h3>D. McGregor</h3>
              <p>Height: 19'2"</p>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>12:00 PM Position</div>
            <div>
              <h3>Current Rank</h3>
              <p style={{ fontSize: '1.5rem', color: '#1a237e' }}>#1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;