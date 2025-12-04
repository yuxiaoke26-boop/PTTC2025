import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 引入原有的组件
import Register from './components/Register';
import Login from './components/Login';
import SpecialGuests from './components/SpecialGuests';
import Scoreboard from './components/Scoreboard';
import Schedule from './components/Schedule';

// 引入新增的两个组件 (你刚才觉得少的就是这里！)
import EventApplication from './components/EventApplication'; // 报名页
import AdminDashboard from './components/AdminDashboard';     // 管理员后台
import logo from './assets/1.JPG';
import UserProfile from './components/UserProfile';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* 顶部导航栏 */}
        <nav style={{ padding: '1rem', background: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={logo} alt="PTTC Logo" style={{ height: '40px' }} /> {/* Logo 图片 */}
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>PTTC 2025</span>
          </div>
          <div>
            <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>HOME</Link>
            <Link to="/schedule" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Schedule</Link>
            {/* 这里的登录/注册链接其实可以在登录后隐藏，但为了作业简单，先留着 */}
            <Link to="/login" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Log in to register or manage.</Link>
            <Link to="/register" style={{ background: '#e91e63', padding: '5px 10px', borderRadius: '4px', color: 'white', textDecoration: 'none', marginLeft: '10px' }}>register</Link>
            {/* 简单的导航栏链接添加方式 */}
            <Link to="/profile" style={{ color: 'white', margin: '0 10px', fontWeight: 'bold' }}>Personal center</Link>
          </div>
        </nav>

        {/* 页面内容区域 */}
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* 首页 */}
            <Route path="/" element={
              <>
                <Scoreboard />
                <SpecialGuests />
              </>
            } />
            
            {/* 原有的页面 */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/schedule" element={<Schedule />} />

            {/* 👇 新增的两个页面路由 (补全这里！) 👇 */}
            <Route path="/apply" element={<EventApplication />} />
            <Route path="/admin" element={<AdminDashboard />} />

            <Route path="/profile" element={<UserProfile />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;