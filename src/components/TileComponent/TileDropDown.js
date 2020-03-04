import React from 'react';

const TileDropDown = (props) => {
    return ( 
        <div className="tile__dropdown">
            <div className="tile_dropdown-child tile_dropdown-child--image">
                 <img src={props.image.src} alt={props.image.alt}/>
            </div>
            <div className="tile_dropdown-child tile_dropdown-child--text">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                {(props.cta) && (<a href={props.cta.link} className="tile_dropdown-child--cta">{props.cta.text}</a>)}
            </div>
        </div>
     );
}
 
export default TileDropDown;