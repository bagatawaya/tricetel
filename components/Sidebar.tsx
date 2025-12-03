import React from 'react';

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside style={{ width: 200, background: '#f0f0f0', padding: 20, height: '100vh' }}>
      <h2>TriceTel</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <button onClick={() => onNavigate && onNavigate('agents')}>Agents</button>
        </li>
        {/* Future sections */}
      </ul>
    </aside>
  );
}
