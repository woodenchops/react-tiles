import React from 'react';
import {TileProvider} from './contexts/tileContext';

import './App.css';
import TileComponent from './components/TileComponent/TileComponent';

function App() {
  return (
    <div className="App">
      <TileProvider>
        <TileComponent/>
      </TileProvider>
    </div>
  );
}

export default App;
