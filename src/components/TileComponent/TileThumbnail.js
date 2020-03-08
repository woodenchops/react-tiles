import React from 'react';
import PropTypes from 'prop-types';



const TileThumbnail = ({image, title}) => {
    return ( 
        <div className="tile" style={{backgroundImage: `url(${image.src})`}}>
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
  }
 
export default TileThumbnail;