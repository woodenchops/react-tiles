import React from 'react';
import PropTypes from 'prop-types';



const TileThumbnail = ({image, title, index, handleDropDownKeyPress, handleDropDown}) => {
    return ( 
        <div className="tile" style={{backgroundImage: `url(${image.src})`}}tabIndex="0" onKeyPress={(e) => {handleDropDownKeyPress(index, e)}} onClick={()=>{handleDropDown(index)}}>
            <div className="tile__hover-overlay">
                <h3>{title}</h3>
            </div> 
            <div className="tile__arrow-down"></div>  
         </div>
     );
}

TileThumbnail.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleDropDownKeyPress: PropTypes.func.isRequired,
    handleDropDown: PropTypes.func.isRequired
  }
 
export default TileThumbnail;