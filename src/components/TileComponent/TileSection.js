import React, { Fragment, useContext } from 'react';
import {TileContext} from '../../contexts/tileContext';
import Tile from './Tile';



const TileSection = () => {

     const {tiles, handleDropDown} = useContext(TileContext);
    
        let tile = tiles.map((item, index) => (
            <Tile item={item} index={index} handleDropDown={handleDropDown} key={index}/>
        ));

        return (
            <Fragment>
                {tile}
            </Fragment> 
         );
    
}


 
export default TileSection;