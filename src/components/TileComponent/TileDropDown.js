import React from 'react';
import PropTypes from 'prop-types';

const TileDropDown = ({image, title, body, cta}) => {
 
    return ( 
        <div className="tile__dropdown">
            <div className="tile_dropdown-child tile_dropdown-child--image">
                 <img src={image.src} alt={image.alt}/>
            </div>
            <div className="tile_dropdown-child tile_dropdown-child--text">
                <h3>{title}</h3>
                <p>{body}</p>
                {(cta) && (<a href={cta.link} className="tile_dropdown-child--cta" target={(cta.open) && ("_blank")} rel="noopener noreferrer">{cta.text}</a>)}
            </div>
        </div>
     );
}

TileDropDown.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    cta: PropTypes.object
  }
 
export default TileDropDown;