import React from 'react';
import {MasterProvider} from '../src/contexts/masterContext';

import './App.css';
import TileComponent from './components/TileComponent/TileComponent';

function App() {
  return (
    <div className="App">
      <MasterProvider>
        <TileComponent/>
      </MasterProvider>
    </div>
  );
}

export default App;
