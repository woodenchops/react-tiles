import React from 'react';
import PropTypes from 'prop-types';



const TileThumbnail = ({image, handleDropDown, title, index}) => {
    return ( 
        <div className="tile" style={{backgroundImage: `url(${image.src})`}}  onClick={()=>{handleDropDown(index)}}>
            <div className="tile__hover-overlay">
                <h3>{title}</h3>
            </div> 
            <div className="arrow-down"></div>  
         </div>
     );
}

TileThumbnail.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    handleDropDown: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }
 
export default TileThumbnail;