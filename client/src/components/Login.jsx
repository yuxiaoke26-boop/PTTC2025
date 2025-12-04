import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 使用 React 路由跳转
import API_URL from '../config';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 使用简写路径，通过 proxy 转发
      const res = await axios.post(`${API_URL}/api/login`, { username, password });
      
      const userData = res.data.user;
      
      // 1. 把用户信息存到浏览器，方便其他页面使用
      localStorage.setItem('user', JSON.stringify(userData));
      
      alert(`Welcome back, ${userData.username}!`);

      // 2. 智能跳转逻辑
      if (userData.role === 'admin') {
        navigate('/admin'); // 管理员 -> 去后台
      } else {
        navigate('/apply'); // 普通用户 -> 去报名页面
      }

    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'unknown error'));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>User login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#1a237e', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;