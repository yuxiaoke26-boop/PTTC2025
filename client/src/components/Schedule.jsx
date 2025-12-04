import React from 'react';

const Schedule = () => {
  const events = [
    { time: '09:00', event: 'Highland Dance Opening', type: 'Traditional', location: 'Main Stage' },
    { time: '10:00', event: 'Men\'s Table Tennis Singles - Prelims', type: 'New 2025', location: 'Indoor Hall A' },
    { time: '11:30', event: 'Hammer Throw (Highland Games)', type: 'Traditional', location: 'Field B' },
    { time: '13:00', event: 'Women\'s Table Tennis - Quarter Finals', type: 'New 2025', location: 'Indoor Hall A' },
    { time: '14:30', event: 'Tug o\' War ', type: 'Traditional', location: 'Main Field' },
    { time: '16:00', event: 'Table Tennis Championship Final', type: 'New 2025', location: 'Center Court' },
  ];

  return (
    <div>
      <h2>2025 Schedule</h2>
      <p>This competition combines traditional highland sports with the newly added table tennis competition.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ background: '#f0f0f0', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Time</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Project name</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Type</th>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Place</th>
          </tr>
        </thead>
        <tbody>
          {events.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px' }}>{item.time}</td>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{item.event}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ 
                  background: item.type === 'New 2025' ? '#e91e63' : '#1a237e', 
                  color: 'white', padding: '3px 8px', borderRadius: '10px', fontSize: '0.8rem' 
                }}>
                  {item.type}
                </span>
              </td>
              <td style={{ padding: '10px' }}>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;