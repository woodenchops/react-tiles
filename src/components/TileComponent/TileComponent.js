import React, {useContext} from 'react';
import TileSection from "./TileSection";
import { TileContext } from '../../contexts/tileContext';

const TileComponent = () => {

    const {loading} = useContext(TileContext);

    return ( 
        <div className="container tile-container">
            {(loading) ? <h3 className="tile-container__loading">Loading...</h3> : <TileSection/>}
        </div>
     );
}
 
export default TileComponent;