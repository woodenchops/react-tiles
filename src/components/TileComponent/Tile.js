import React from 'react';
import TileDropDown from './TileDropDown';
import TileThumbnail from './TileThumbnail';
import PropTypes from 'prop-types';


const Tile = ({item, index, handleDropDown, handleDropDownKeyPress}) => {
    return ( 

        <div className={"tile-section " + (item.isActive ? "tile-section--active-tile" : "")} tabIndex="0" aria-label={(item.isActive) ? (`${item.title} is open`) : (`${item.title} is closed`) } aria-live="assertive" onKeyPress={(e) => {handleDropDownKeyPress(index, e)}} onClick={()=>{handleDropDown(index)}}>
                <TileThumbnail title={item.title} image={item.image}/>
                <TileDropDown title={item.title} body={item.body} image={item.image} cta={item.cta} /> 
        </div>


     );
}

Tile.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDropDown: PropTypes.func.isRequired,
    handleDropDownKeyPress: PropTypes.func.isRequired 
  }
 
export default Tile;