import React from 'react';

const TileDropDown = (props) => {
    return ( 
        <div className="tile__dropdown">
            <p>{props.body}</p>
            <img src={props.image} alt="test"/>
        </div>
     );
}
 
export default TileDropDown;