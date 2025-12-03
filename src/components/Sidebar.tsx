import React from 'react';

export default function Sidebar() {
  return (
    <aside style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Agents</li>
          <li>Agent Builder</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
