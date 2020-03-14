import React, {useContext, useState} from 'react';
import { TileContext } from '../../contexts/tileContext';

const TileLoadMore = () => {

    const {loadTiles, tileShowCount} = useContext(TileContext);
    let [updatedTilesCount, setTilesCount] = useState(tileShowCount);
    return (
        <div className="tile-load-more-container">

        <button className="tile-load-more"  
            onClick={() => {
                setTilesCount(() => (updatedTilesCount += 8));
                loadTiles(updatedTilesCount);
            }}>
            LOAD MORE
            </button>

        </div>

     

     );
}
 
export default TileLoadMore;