import React, { Component, Fragment} from 'react';


import Goal from "./GoalMeter.js";



export default class Ingredientresults extends Component {
    constructor(props) {
      super(props);
      this.state = {
        //stores the recipes from the apicall for breakfast/ also updates when confirm selection is clicked
        breakfast: null,
        //stores the recipes from the apicall for lunch/ also updates when confirm selection is clicked
        lunch: null,
        //stores the recipes from the apicall for dinner/ also updates when confirm selection is clicked
        dinner: null,
        //options checked or not
        b1: false,
        b2: false,
        b3: false,
        l1: false,
        l2: false,
        l3: false,
        d1: false,
        d2: false,
        d3: false,
        //state to change render between three options and one
        
        //increases and decreses when consumed boxes are checked and unchecked
        c1: false,
        c2:false,
        c3: false,
        consumed: 0,
        
      };
      this.b1change= this.b1change.bind(this);
      this.b2change= this.b2change.bind(this);
      this.b3change= this.b3change.bind(this);
      this.l1change= this.l1change.bind(this);
      this.l2change= this.l2change.bind(this);
      this.l3change= this.l3change.bind(this);
      this.d1change= this.d1change.bind(this);
      this.d2change= this.d2change.bind(this);
      this.d3change= this.d3change.bind(this);
      this.saveRecipe=this.saveRecipe.bind(this);
      this.consumedChange=this.consumedChange.bind(this);
    }

    saveRecipe(){
      this.props.onresult(this.state.breakfast, this.state.lunch, this.state.dinner);
      //need to make fetch post to store user data need this.props.name, this.props.date, this.state.breakfast, this.state.lunch, this.state.dinner

    }

    userExist(){
      this.setState({breakfast:this.props.breakfast});
      this.setState({lunch:this.props.lunch});
      this.setState({dinner:this.props.dinner});
      this.setState({results:"one"});
    }
    consumedChange(){
      let breakCon= this.state.c1;
      let lunchCon=this.state.c2;
      let dinnerCon=this.state.c3;

      if(breakCon === true & lunchCon===true & dinnerCon===true){
        this.setState({consumed: 100});
      }else if(breakCon===true & lunchCon===true || breakCon===true & dinnerCon===true || lunchCon===true & dinnerCon===true){
        this.setState({consumed: 66});
      }else if(breakCon===true || lunchCon===true || dinnerCon===true){
        this.setState({consumed: 33});
      }else{
        this.setState({consumed: 0});
      }

    }



    //method to only allow user to click on selection in Breafast div
    b1change(){
      this.setState({b1: true});
      this.setState({breakfast:this.props.breakfast.b1});
      this.setState({b2: false});
      this.setState({b3: false});
    }
    b2change(){
      this.setState({b2: true});
      this.setState({breakfast:this.props.breakfast.b2});
      this.setState({b1: false});
      this.setState({b3: false});
    }
    b3change(){
      this.setState({b3: true});
      this.setState({breakfast:this.props.breakfast.b3});
      this.setState({b2: false});
      this.setState({b1: false});
    }

    //method to only allow user to click on selection in Lunch div
    l1change(){
      this.setState({l1: true});
      this.setState({lunch: this.props.lunch.l1});
      this.setState({l2: false});
      this.setState({l3: false});
    }
    l2change(){
      this.setState({l2: true});
      this.setState({lunch: this.props.lunch.l2});
      this.setState({l1: false});
      this.setState({l3: false});
    }
    l3change(){
      this.setState({l3: true});
      this.setState({lunch:this.props.lunch.l3});
      this.setState({l2: false});
      this.setState({l1: false});
    }
    
    //method to only allow user to click on selection in Dinner div
    d1change(){
      this.setState({d1: true});
      this.setState({dinner:this.props.dinner.d1});
      this.setState({d2: false});
      this.setState({d3: false});
    }
    d2change(){
      this.setState({d2: true});
      this.setState({dinner:this.props.dinner.d2});
      this.setState({d1: false});
      this.setState({d3: false});
    }
    d3change(){
      this.setState({d3: true});
      this.setState({dinner:this.props.dinner.d3});
      this.setState({d2: false});
      this.setState({d1: false});
    }

    //method to update consumed either increase or decrease based on checks in the consumed box

    //method to update the breakfast/lunch/dinner states above once the confirm selection button is clicked. Need conditional to send an alert if the 


    componentDidMount() {
      



      
    }
  
    render() {
      //conditional to update with render with goal meter <Goal {this.state.consumed}/>
      var results;
      if(this.props.result === "many"){
        results= <Fragment>
         <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        <label>
          <input name="b1" type="checkbox" checked={this.state.b1} onChange={this.b1change}></input>
          {this.props.breakfast.b1}
        </label>
        <label>
          <input name="b2" type="checkbox" checked={this.state.b2} onChange={this.b2change}></input>
          {this.props.breakfast.b2}
        </label>
        <label>
          <input name="b3" type="checkbox" checked={this.state.b3} onChange={this.b3change}></input>
          {this.props.breakfast.b3}
        </label>
      </div>
      <div id={"lunch"}>
        <h1>LUNCH</h1>
        <label>
          <input name="l1" type="checkbox" checked={this.state.l1} onChange={this.l1change}></input>
          {this.props.breakfast.l1}
        </label>
        <label>
          <input name="l2" type="checkbox" checked={this.state.l2} onChange={this.l2change}></input>
          {this.props.breakfast.l2}
        </label>
        <label>
          <input name="l3" type="checkbox" checked={this.state.l3} onChange={this.l3change}></input>
          {this.props.breakfast.l3}
        </label>

      </div>
      <div id={"dinner"}>
        <h1>DINNER</h1>
        <label>
          <input name="d1" type="checkbox" checked={this.state.d1} onChange={this.d1change}></input>
          {this.props.breakfast.d1}
        </label>
        <label>
          <input name="d2" type="checkbox" checked={this.state.d2} onChange={this.d2change}></input>
          {this.props.breakfast.d2}
        </label>
        <label>
          <input name="d3" type="checkbox" checked={this.state.d3} onChange={this.d3change}></input>
          {this.props.breakfast.d3}
        </label>

      </div>
      <button type="button" name="saverecipe" id="saverecipe" onClick={this.saveRecipe} >SEARCH RECIPES</button>

     
     </Fragment>
      }else if(this.props.result === "one"){
        results=
        <Fragment>
         <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        <label>
          <input name="c1" type="checkbox" checked={this.state.c1} onChange={this.consumedChange}></input>
          {this.state.breakfast}
        </label>
      
      </div>
      <div id={"lunch"}>
        <h1>LUNCH</h1>
        <label>
          <input name="c2" type="checkbox" checked={this.state.c2} onChange={this.consumedChange}></input>
          {this.state.breakfast}
        </label>

      </div>
      <div id={"dinner"}>
        <h1>DINNER</h1>
        <label>
          <input name="c3" type="checkbox" checked={this.state.c3} onChange={this.consumedChange}></input>
          {this.state.dinner}
        </label>

      </div>
      <button type="button" name="saverecipe" id="saverecipe" >SEARCH RECIPES</button>
        <Goal consumed={this.state.consumed} />
     
     </Fragment>
      }


      return (
        <div id={"results"}>
        <div id={"breakfast"}>
          <h1>BREAKFAST</h1>
          <label>
            <input name="b1" type="checkbox" checked={this.state.b1} onChange={this.b1change}></input>
            {this.props.breakfast.b1}
          </label>
          <label>
            <input name="b1" type="checkbox" checked={this.state.b2} onChange={this.b2change}></input>
            {this.props.breakfast.b2}
          </label>
          <label>
            <input name="b1" type="checkbox" checked={this.state.b3} onChange={this.b3change}></input>
            {this.props.breakfast.b3}
          </label>
        </div>
        <div id={"lunch"}>
          <h1>LUNCH</h1>

        </div>
        <div id={"dinner"}>
          <h1>DINNER</h1>

        </div>
        <button type="button" name="saverecipe" id="saverecipe" >SEARCH RECIPES</button>

       <Goal/>
        {/* your code here */}
          
         
          
        </div>
      );
    }
  }