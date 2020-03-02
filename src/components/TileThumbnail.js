import React from 'react';

const TileThumbnail = (props) => {
    return ( 
        <div className="tile" style={{backgroundImage: `url(${props.image})`}}>
            <div className="tile__hover-overlay">
                <h3>{props.title}</h3>
            </div> 
            <div class="arrow-down"></div>  
         </div>
     );
}
 
export default TileThumbnail;