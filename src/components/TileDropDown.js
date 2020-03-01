import React from 'react';

const TileDropDown = (props) => {
    return ( 
        <div className="tile__dropdown">
            <div className="tile_dropdown-child">
                 <img src={props.image} alt={props.image}/>
            </div>
            <div className="tile_dropdown-child">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </div>
     );
}
 
export default TileDropDown;