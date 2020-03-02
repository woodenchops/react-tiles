import React, { Component, Fragment } from 'react';
import data from '../data/tileinfo.json';
import TileDropDown from './TileDropDown.js';
import TileThumbnail from './TileThumbnail.js';

class Tile extends Component {
    state = { 
        tiles: data
     }
     handleDropDown = id => {
       const newState = !this.state.tiles[id].isActive;
        this.setState(prevState => ({
          tiles: prevState.tiles.map((tile, i) => ({
            ...tile,
            isActive: (i === id)? newState: false
          }))
        }));
      };
    
    render() {
        let tile = this.state.tiles.map((item, index) => (
            <div className={"tile-section " + (item.isActive ? "activeTile" : "")}  key={index} onClick={()=>{this.handleDropDown(index)}}>
                <TileThumbnail title={item.title} image={item.image}/>
                <TileDropDown title={item.title} body={item.body} image={item.image} /> 
            </div>
        ));

        return (
            <Fragment>
                {tile}
            </Fragment> 
         );
    }
}


 
export default Tile;