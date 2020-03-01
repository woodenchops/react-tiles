import React from 'react';

const TileDropDown = (props) => {
    return ( 
        <div className="tile__dropdown">
            <p>{props.body}</p>
            <img src={props.image} alt={props.image}/>
        </div>
     );
}
 
export default TileDropDown;