import React, { Component, Fragment } from 'react';
import data from '../data/tileinfo.json';
import TileDropDown from './TileDropDown.js';
import TileThumbnail from './TileThumbnail.js';

class Tile extends Component {
    state = { 
        tiles: data
     }
     handleDropDown = id => {
        this.setState(prevState => ({
          tiles: prevState.tiles.map((tile, i) => ({
            ...tile,
            isActive: ( id === i ) ? !this.state.tiles[id].isActive : false
          }))
        }));
      };

      /**********************
       NOTES:

       tiles: prevState.tiles.map((tile, i) => ({
            ...tile,
            isActive: ( id === i ) ? !this.state.tiles[id].isActive : false
          }))

          The purpose of the above function is to map through each item in an array and create a new object literal for each.
          This then updates the state in the component. 

          So, in this case, the fat arrow function is creating a new object literal.
          In order to create an object literal, we have to wrap the "{}" in parentheses "()" e.g.

          let myFunction = () => ({})

          if you dont wrap the curly braces in parentheses. then you create a regular code block e.g.

          let myFunction = () => { // Do stuff }

           - you cant create an object literal with a regular code block 

           let myFunction = () => { 'title': 'title one' } - this will throw an error


           ------ SPREAD OPERATOR ------

            var obj1 = {a: 100, b: 200}
            var obj2 = {...obj1, b 500}

            NOTE:

            this is the same as 

            var obj2 = {a: 100, b: 200, b: 500} - declared 'b' twice - then then override 'b'

            OUTPUT: obj2 = {a: 100, b: 500}

            You use the spread operator and insert the values from obj1
            You then by targeting 'b' again, you then override the value  



       **********************/
    
    render() {
        let tile = this.state.tiles.map((item, index) => (
            <div className={"tile-section " + (item.isActive ? "activeTile" : "")}  key={index}>
                <TileThumbnail title={item.title} image={item.image} handleDropDown={this.handleDropDown} index={index}/>
                <TileDropDown title={item.title} body={item.body} image={item.image} /> 
            </div>
        ));

        return (
            <Fragment>
                {tile}
            </Fragment> 
         );
    }
}


 
export default Tile;