import React, { Component } from 'react';
import Checkbox from "./checkbox.js"
import {intoleranceItems, nutrientItems} from "./option"





export default class PickIngredients extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
        //array to show 
        checkedItemsb: new Map(),
        checkedItemsl: new Map(),
        checkedItemsd: new Map(),
        //ingredient text area for each meal
        textb:"",
        textl:"",
        textd:"",
       
              
      };
      
     
      this.toggleCheckboxChangeb= this.toggleCheckboxChangeb.bind(this);
      this.toggleCheckboxChangel= this.toggleCheckboxChangel.bind(this);
      this.toggleCheckboxChanged= this.toggleCheckboxChanged.bind(this);
      // this.api = `http://localhost:8000/api/example`;
    }

        

    //adds the clicked item to the state checked boxes and adds true or false for checked or not breakfast
    toggleCheckboxChangeb(e){
      
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItemsb: prevState.checkedItemsb.set(item, isChecked) }));
      console.log(this.state.checkedItemsb);
    }
    ////adds the clicked item to the state checked boxes and adds true or false for checked or not lunch
    toggleCheckboxChangel(e){
      
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItemsl: prevState.checkedItemsl.set(item, isChecked) }));
    console.log(this.state.checkedItemsl);
  }
  ////adds the clicked item to the state checked boxes and adds true or false for checked or not dinner
  toggleCheckboxChanged(e){
      
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItemsd: prevState.checkedItemsd.set(item, isChecked) }));
  console.log(this.state.checkedItemsd);
}

    //onchange for text area for each meal
    Btext(e){
        
        this.setState({textb: e.target.value});
    }
    Ltext(e){
        
        this.setState({textl: e.target.value});
    }
    Dtext(e){
        
        this.setState({textd: e.target.value});
    }




   

    componentDidMount() {
      //*2event listner login coponent

      // fetch(this.api)
      //   .then(res => res.json())
      //   .then(seaCreatures => {
         
      //   });
    }
  
    render() {

      //conditional based off state value to render nothing, ingredient selector divs or ingredient results
      
      


      return (
        <div id={"pickingredients"}>
       

        <div id={"breakfast"} className={"mealpick"}>
        <h1>BREAKFAST</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>
        <h4>Intolerance</h4>
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsb.get(item.name)} onChange={this.toggleCheckboxChangeb}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>
        <h4>Nutrients</h4>
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsb.get(item.name)} onChange={this.toggleCheckboxChangeb}/>
          </label>
        ))}
        </div>
        <div id={"addIng"}>
        <h4>Add Ingredients</h4>
          <textarea id={"ingText"} cols="30" rows="10" value={this.state.textb} onChange={this.Btext.bind(this)}></textarea>
          
        </div>

        </div>
        </div>
        <div id={"lunch"}  className={"mealpick"}>
        <h1>LUNCH</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>
        <h4>Intolerance</h4>
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsl.get(item.name)} onChange={this.toggleCheckboxChangel}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>
        <h4>Nutrients</h4>
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsl.get(item.name)} onChange={this.toggleCheckboxChangel}/>
          </label>
        ))}
        </div>
        <div id={"addIng"}>
        <h4>Add Ingredients</h4>
       
        <textarea id={"ingText"} cols="30" rows="10" value={this.state.textl} onChange={this.Ltext.bind(this)}></textarea>

        </div>

        </div>
        </div>
        <div id={"dinner"}  className={"mealpick"}>
        <h1>DINNER</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>
        <h4>Intolerance</h4>
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsd.get(item.name)} onChange={this.toggleCheckboxChanged}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>
        <h4>Nutrients</h4>   
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={this.state.checkedItemsd.get(item.name)} onChange={this.toggleCheckboxChanged}/>
          </label>
        ))}
        </div>
        <div id={"addIng"}>
        <h4>Add Ingredients</h4>
        
        <textarea id={"ingText"} cols="30" rows="10" value={this.state.textd} onChange={this.Dtext.bind(this)}></textarea>

        </div>

        </div> 
        </div>
       <button id={"searchrecipe"} type={"submit"}>SEARCH RECIPES</button>
          
         
          
        </div>
      );
    }
  }