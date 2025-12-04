import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../config';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // 获取用户列表
    axios.get('\${API_URL}/api/users').then(res => setUsers(res.data));
    // 获取报名列表
    axios.get('\${API_URL}/api/applications').then(res => setApplications(res.data));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ color: '#d32f2f', textAlign: 'center' }}>Admin Dashboard</h1>
      
      {/* 板块 1: 报名管理 */}
      <div style={{ marginTop: '40px' }}>
        <h3>Event Applications</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <thead>
            <tr style={{ background: '#1a237e', color: 'white' }}>
              <th style={{ padding: '10px' }}>Applicant</th>
              <th style={{ padding: '10px' }}>Project</th>
              <th style={{ padding: '10px' }}>Category</th>
              <th style={{ padding: '10px' }}>State</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app._id} style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                <td style={{ padding: '10px' }}>{app.username}</td>
                <td style={{ padding: '10px' }}>{app.eventName}</td>
                <td style={{ padding: '10px' }}>{app.category}</td>
                <td style={{ padding: '10px', color: 'orange', fontWeight: 'bold' }}>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 板块 2: 用户管理 (之前的代码保留) */}
      <div style={{ marginTop: '50px' }}>
        <h3>Registered user list</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#eee' }}>
              <th style={{ padding: '8px' }}>Name</th>
              <th style={{ padding: '8px' }}>Phone</th>
              <th style={{ padding: '8px' }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id} style={{ borderBottom: '1px solid #eee', textAlign: 'center' }}>
                <td style={{ padding: '8px' }}>{u.username}</td>
                <td style={{ padding: '8px' }}>{u.phoneNumber}</td>
                <td style={{ padding: '8px' }}>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;