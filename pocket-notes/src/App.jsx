import React, { useState } from 'react';
import NoteState from './Context/NotesState';
import DesktopView from './Views/DesktopView/DesktopView';
import MobileView from './Views/MobileView/MobileView';
import TabletView from './Views/TabletView/TabletView';
import './App.css';

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const handleScreenSize = () => {
    setScreenSize(window.innerWidth);
  }
  window.addEventListener('resize', handleScreenSize);
  return (
    <NoteState>
      <div className="app">
        {screenSize > 768 && <DesktopView />}
        {screenSize <= 768 && screenSize >= 426 && <TabletView />}
        {screenSize < 426 && <MobileView />}
      </div>
    </NoteState>
  )
}

export default App
