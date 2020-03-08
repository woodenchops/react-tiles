import React, { Fragment, useContext } from 'react';
import {TileContext} from '../../contexts/tileContext';
import Tile from './Tile';



const TileSection = () => {

     const {tiles, handleDropDown, handleDropDownKeyPress} = useContext(TileContext);
    
        let tile = tiles.map((item, index) => (
            <Tile item={item} index={index} handleDropDown={handleDropDown} handleDropDownKeyPress={handleDropDownKeyPress} key={index}/>
        ));

        return (
            <Fragment>
                {tile}
            </Fragment> 
         );
    
}


 
export default TileSection;