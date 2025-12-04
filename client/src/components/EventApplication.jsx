import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';

const EventApplication = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState('Table Tennis - Men\'s Singles');

  // 定义比赛项目列表 (混合了乒乓球和高地运动会)
  const events = [
    { name: "Table Tennis - Men's Singles", category: "Table Tennis" },
    { name: "Table Tennis - Women's Singles", category: "Table Tennis" },
    { name: "Caber Toss ", category: "Highland Games" },
    { name: "Hammer Throw", category: "Highland Games" },
    { name: "Tug o' War ", category: "Highland Games" }
  ];

  useEffect(() => {
    // 检查用户是否登录
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      alert("Please log in first！");
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleApply = async () => {
    if (!user) return;
    
    const category = events.find(e => e.name === selectedEvent).category;

    try {
      await axios.post('\${API_URL}/api/apply', {
        username: user.username,
        eventName: selectedEvent,
        category: category
      });
      alert("✅ Registration submitted successfully!");
    } catch (error) {
      alert("Registration failed, please try again later.");
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', boxShadow: '0 0 15px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
      <h2 style={{ color: '#e91e63', borderBottom: '2px solid #e91e63', paddingBottom: '10px' }}>
        Event Registration
      </h2>
      
      <div style={{ marginBottom: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '5px' }}>
        <strong>Current Applicants:</strong> {user.username} <br/>
        
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Select entry:</label>
        <select 
          value={selectedEvent} 
          onChange={(e) => setSelectedEvent(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        >
          {events.map((ev, index) => (
            <option key={index} value={ev.name}>
              {ev.name} ({ev.category})
            </option>
          ))}
        </select>
      </div>

      <button 
        onClick={handleApply}
        style={{ width: '100%', padding: '15px', background: '#1a237e', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer' }}
      >
        Submit Application
      </button>
    </div>
  );
};

export default EventApplication;