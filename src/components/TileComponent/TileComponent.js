import React, { Fragment, useContext} from 'react';
import TileSection from "./TileSection";
import { TileContext } from '../../contexts/tileContext';
import TileLoadMore from './TileShowMoreBtn';

const TileComponent = () => {

    const {loading} = useContext(TileContext);

    return ( 
        <div className="container tile-container">
            {(loading) ? <h3 className="tile-container__loading">Loading...</h3> : <Fragment> <TileSection/> <TileLoadMore/> </Fragment>}
        </div>
     );
}
 
export default TileComponent;