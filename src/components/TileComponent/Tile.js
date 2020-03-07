import React from 'react';
import TileDropDown from './TileDropDown';
import TileThumbnail from './TileThumbnail';
import PropTypes from 'prop-types';


const Tile = ({item, index, handleDropDown}) => {
    return ( 

        <div className={"tile-section " + (item.isActive ? "activeTile" : "")}>
                <TileThumbnail title={item.title} image={item.image} handleDropDown={handleDropDown} index={index}/>
                <TileDropDown title={item.title} body={item.body} image={item.image} cta={item.cta} /> 
        </div>


     );
}

Tile.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDropDown: PropTypes.func.isRequired,
  }
 
export default Tile;