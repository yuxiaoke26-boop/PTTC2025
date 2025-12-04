import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. 从浏览器缓存读取当前登录的用户信息
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (!storedUser) {
      alert("Please log in first");
      navigate('/login'); // 没登录就踢走
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user'); // 清除登录状态
    navigate('/login');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <h2 style={{ color: '#1a237e', borderBottom: '2px solid #eee', paddingBottom: '15px' }}>
        My Profile
      </h2>
      
      {/* GDPR Requirement: Users can see their own personal data  */}
      <div style={{ lineHeight: '2.5', fontSize: '1.1rem' }}>
        <div>
          <strong>Username:</strong> <br/>
          {user.username}
        </div>
        <div>
          <strong>Phone:</strong> <br/>
          {user.phoneNumber}
        </div>
        <div>
          <strong>Address:</strong> <br/>
          {user.address }
        </div>
        <div>
          <strong>Role:</strong> <br/>
          <span style={{ background: '#eee', padding: '2px 8px', borderRadius: '4px' }}>
            {user.role}
          </span>
        </div>
        
      </div>

      <button 
        onClick={handleLogout}
        style={{ marginTop: '30px', width: '100%', padding: '12px', background: '#e91e63', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserProfile;