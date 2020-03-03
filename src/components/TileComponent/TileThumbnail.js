import React from 'react';

const TileThumbnail = (props) => {
    return ( 
        <div className="tile" style={{backgroundImage: `url(${props.image})`}}  onClick={()=>{props.handleDropDown(props.index)}}>
            <div className="tile__hover-overlay">
                <h3>{props.title}</h3>
            </div> 
            <div className="arrow-down"></div>  
         </div>
     );
}
 
export default TileThumbnail;