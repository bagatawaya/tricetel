import React from 'react';

interface TopBarProps {
  title?: string;
}

export default function TopBar({ title = 'Agent Portal' }: TopBarProps) {
  return (
    <header style={{ width: '100%', background: '#fff', borderBottom: '1px solid #ccc', padding: '10px 20px' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
    </header>
  );
}
