import React, { Component, Fragment } from 'react';
import data from '../data/tileinfo.json';
import TileDropDown from './TileDropDown.js';

class Tile extends Component {
    state = { 
        tiles: data
     }
     handleDropDown = id => {
        this.setState(prevState => ({
          tiles: prevState.tiles.map((tile, i) => ({
            ...tile,
            isActive: i === id
          }))
        }));
      };
    
    render() {
        let tile = this.state.tiles.map((item, index) => (
            <div 
            className={"tile-section " + (item.isActive ? "activeTile" : "")}
            key={index} 
            onClick={()=>{this.handleDropDown(index)}} 
            >
                <div className="tile" style={{backgroundImage: `url(${item.image})`}}>
                    <div className="tile__hover-overlay">
                        <h3>{item.title}</h3>
                    </div> 
                    <div class="arrow-down"></div>  
                </div>
                <TileDropDown body={item.body} image={item.image}/> 
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