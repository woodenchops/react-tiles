import React from 'react';
import {TileProvider} from './contexts/tileContext';

import './App.css';
import TileComponent from './components/TileComponent/TileComponent';
import NavBar from './components/NavBarComponent/NavBar';

function App() {
  return (
    <div className="App">
      <TileProvider>
        <NavBar/>
        <TileComponent/>
      </TileProvider>
    </div>
  );
}

export default App;
