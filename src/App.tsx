import React, { useState } from 'react';
import AgentList from './pages/AgentList';
import AgentDetail from './pages/AgentDetail';
import AgentBuilder from './pages/AgentBuilder';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

export default function App() {
  const [page, setPage] = useState<'list' | 'detail' | 'builder'>('list');

  const renderPage = () => {
    switch (page) {
      case 'detail':
        return <AgentDetail />;
      case 'builder':
        return <AgentBuilder />;
      default:
        return <AgentList />;
    }
  };

  return (
    <>
      <TopBar />
      <div className="layout" style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '10px' }}>
          <nav style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <button onClick={() => setPage('list')}>Agents</button>
            <button onClick={() => setPage('detail')}>Detail</button>
            <button onClick={() => setPage('builder')}>Builder</button>
          </nav>
          {renderPage()}
        </main>
      </div>
    </>
  );
}
