import React, {Fragment, useContext, useState} from 'react';
import { TileContext } from '../../contexts/tileContext';

const TileLoadMore = () => {

    const {loadTiles} = useContext(TileContext);
    let [updatedTilesCount, setTilesCount] = useState(8);
    return (
        <Fragment>
            <button className="tile-load-more" 
            onClick={() => {
                setTilesCount(() => (updatedTilesCount += 8));
                loadTiles(updatedTilesCount);
            }}>
            Load more</button>
        </Fragment>

     );
}
 
export default TileLoadMore;