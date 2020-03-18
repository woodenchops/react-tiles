import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {TileProvider} from './contexts/tileContext';

import './App.css';
import TileComponent from './components/TileComponent/TileComponent';
import TilePost from './components/TileComponent/TilePost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TileProvider>
          <Switch>

            <Route exact path="/" component={TileComponent}/>
            <Route path="/:post_id" component={TilePost}/>

          </Switch>
        </TileProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
