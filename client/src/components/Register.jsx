import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../config';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    address: '',
    password: '',
    isGdprConsented: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.isGdprConsented) {
      alert("Please agree to the GDPR Privacy Policy.");
      return;
    }

    try {
      await axios.post('\${API_URL}/api/register', formData);
      alert('Registration successful!');
      window.location.href = '/login';
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', color: '#1a237e' }}>New registered user</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Username/Nickname</label>
          <input 
            type="text" name="username" required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            onChange={handleChange} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>phone number</label>
          <input 
            type="text" name="phoneNumber" required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            onChange={handleChange} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>residential address</label>
          <input 
            type="text" name="address" required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            onChange={handleChange} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Set password</label>
          <input 
            type="password" name="password" required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            onChange={handleChange} 
          />
        </div>
        
        {/* GDPR 部分 - 核心点 */}
        <div style={{ marginBottom: '20px', background: '#e3f2fd', padding: '10px', borderRadius: '4px' }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              name="isGdprConsented" 
              checked={formData.isGdprConsented}
              onChange={handleChange}
              style={{ marginRight: '10px' }}
            />
            <span style={{ fontSize: '0.9rem' }}>I agree to the GDPR privacy policy. </span>
          </label>
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px', background: '#e91e63', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Register now
        </button>
      </form>
    </div>
  );
};

export default Register;