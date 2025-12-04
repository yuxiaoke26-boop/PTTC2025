import React, { useState, useEffect } from 'react';

const SpecialGuests = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // 使用 RandomUser API 获取5个用户数据
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => setGuests(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 style={{ borderLeft: '5px solid #1a237e', paddingLeft: '10px' }}>Special guest (API Data Source)</h2>
      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', padding: '10px 0' }}>
        {guests.map((guest, index) => (
          <div key={index} style={{ minWidth: '150px', border: '1px solid #eee', padding: '15px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img 
              src={guest.picture.large} 
              alt={guest.name.first} 
              style={{ borderRadius: '50%', width: '80px', height: '80px', marginBottom: '10px' }}
            />
            <h4 style={{ margin: '5px 0' }}>{guest.name.first} {guest.name.last}</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{guest.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialGuests;