import React, { Fragment, useContext } from 'react';
import TileDropDown from '../TileComponent/TileDropDown';
import TileThumbnail from '../TileComponent/TileThumbnail';
import {MasterContext} from '../../contexts/masterContext';

const Tile = () => {

     const {tiles, handleDropDown} = useContext(MasterContext);
    
        let tile = tiles.map((item, index) => (
            <div className={"tile-section " + (item.isActive ? "activeTile" : "")} key={index}>
                <TileThumbnail title={item.title} image={item.image} handleDropDown={handleDropDown} index={index}/>
                <TileDropDown title={item.title} body={item.body} image={item.image} /> 
            </div>
        ));

        return (
            <Fragment>
                {tile}
            </Fragment> 
         );
    
}


 
export default Tile;