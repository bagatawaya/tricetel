import React from 'react';

export default function TopBar() {
  return (
    <header style={{ width: '100%', borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Page Name</h1>
      <div style={{ width: '24px', height: '24px', background: '#ccc', borderRadius: '50%' }}></div>
    </header>
  );
}
