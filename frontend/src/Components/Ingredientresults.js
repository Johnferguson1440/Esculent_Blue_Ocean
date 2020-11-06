import React, { Component, Fragment} from 'react';
import parse from 'html-react-parser';  

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
      this.props.oneresult(this.state.breakfast, this.state.lunch, this.state.dinner);
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
      var b1opt = {b1:{title:this.props.breakfast.b1.title, image:this.props.breakfast.b1.image, summary:this.props.breakfast.b1.summary, source:this.props.breakfast.b1.source}}
      this.setState({b1: true});
      this.setState({breakfast:b1opt});
      this.setState({b2: false});
      this.setState({b3: false});
    }
    b2change(){
      var b2opt = {b1:{title:this.props.breakfast.b2.title, image:this.props.breakfast.b2.image, summary:this.props.breakfast.b2.summary, source:this.props.breakfast.b2.source}}
      this.setState({b2: true});
      this.setState({breakfast:b2opt});
      this.setState({b1: false});
      this.setState({b3: false});
    }
    b3change(){
      var b3opt = {b1:{title:this.props.breakfast.b3.title, image:this.props.breakfast.b3.image, summary:this.props.breakfast.b3.summary, source:this.props.breakfast.b3.source}}
      this.setState({b3: true});
      this.setState({breakfast:b3opt});
      this.setState({b2: false});
      this.setState({b1: false});
    }

    //method to only allow user to click on selection in Lunch div
    l1change(){
      var l1opt = {l1:{title:this.props.lunch.l1.title, image:this.props.lunch.l1.image, summary:this.props.lunch.l1.summary, source:this.props.lunch.l1.source}}
      this.setState({l1: true});
      this.setState({lunch: l1opt});
      this.setState({l2: false});
      this.setState({l3: false});
    }
    l2change(){
      var l2opt = {l1:{title:this.props.lunch.l2.title, image:this.props.lunch.l2.image, summary:this.props.lunch.l2.summary, source:this.props.lunch.l2.source}}
      this.setState({l2: true});
      this.setState({lunch: l2opt});
      this.setState({l1: false});
      this.setState({l3: false});
    }
    l3change(){
      var l3opt = {l1:{title:this.props.lunch.l3.title, image:this.props.lunch.l3.image, summary:this.props.lunch.l3.summary, source:this.props.lunch.l3.source}}
      this.setState({l3: true});
      this.setState({lunch: l3opt});
      this.setState({l2: false});
      this.setState({l1: false});
    }
    
    //method to only allow user to click on selection in Dinner div
    d1change(){
      var d1opt = {d1:{title:this.props.dinner.d1.title, image:this.props.dinner.d1.image, summary:this.props.dinner.d1.summary, source:this.props.dinner.d1.source}}
      this.setState({d1: true});
      this.setState({dinner: d1opt});
      this.setState({d2: false});
      this.setState({d3: false});
    }
    d2change(){
      var d2opt = {d1:{title:this.props.dinner.d2.title, image:this.props.dinner.d2.image, summary:this.props.dinner.d2.summary, source:this.props.dinner.d2.source}}
      this.setState({d2: true});
      this.setState({dinner: d2opt});
      this.setState({d1: false});
      this.setState({d3: false});
    }
    d3change(){
      var d3opt = {d1:{title:this.props.dinner.d3.title, image:this.props.dinner.d3.image, summary:this.props.dinner.d3.summary, source:this.props.dinner.d3.source}}
      this.setState({d3: true});
      this.setState({dinner:d3opt});
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
      var resultb;
      var resultl;
      var resultd;
      if(this.props.result === "many"){
        {/* if b3 === undefined && b2 === undefined && b1 === undefined --Alert 
        if b3 === undefined && b2 === undefined && b1 === not undefined result === one option
          if b3 === undefined && b2 === not undefined result === two option
            else three options*/}
            if(this.props.breakfast === null) {
              resultb = <Fragment>

              <div>No Recipes Found</div>
              </Fragment>
            } else if(this.props.breakfast.b2 === undefined) {
              resultb = <Fragment>
                <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        <div id='options'>
      <input name="b1" type="checkbox" checked={this.state.b1} onChange={this.b1change}/>
        <label>{this.props.breakfast.b1.title}</label>
          <img src={this.props.breakfast.b1.image}></img>
          <div>{parse(`<div>${this.props.breakfast.b1.summary}</div>`)}</div>
          <a href={this.props.breakfast.b1.source}>View Recipes</a>
            </div>
            </div>
              </Fragment>
            } else if(this.props.breakfast.b3 === undefined) {
              resultb = <Fragment>
                 <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        <div id='options'>
      <input name="b1" type="checkbox" checked={this.state.b1} onChange={this.b1change}/>
        <label>{this.props.breakfast.b1.title}</label>
          <img src={this.props.breakfast.b1.image}></img>
          <div>{this.props.breakfast.b1.summary}</div>
          <a href={this.props.breakfast.b1.source}>View Recipes</a>
        </div>

          <div id='options'>
          <input name="b2" type="checkbox" checked={this.state.b2} onChange={this.b2change}/>
          <label>{this.props.breakfast.b2.title}</label>
          <img src={this.props.breakfast.b2.image}></img>
          <div>{this.props.breakfast.b2.summary}</div>
          <a href={this.props.breakfast.b2.source}>View Recipes</a>
          </div> </div>
                </Fragment>
            } else {
              resultb= <Fragment>
         <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        <div id='options'>
      <input name="b1" type="checkbox" checked={this.state.b1} onChange={this.b1change}/>
        <label>{this.props.breakfast.b1.title}</label>
          <img src={this.props.breakfast.b1.image}></img>
          <div>{this.props.breakfast.b1.summary}</div>
          <a href={this.props.breakfast.b1.source}>View Recipes</a>
        </div>

          <div id='options'>
          <input name="b2" type="checkbox" checked={this.state.b2} onChange={this.b2change}/>
          <label>{this.props.breakfast.b2.title}</label>
          <img src={this.props.breakfast.b2.image}></img>
          <div>{this.props.breakfast.b2.summary}</div>
          <a href={this.props.breakfast.b2.source}>View Recipes</a>
          </div>

          <div id='options'>
          <input name="b3" type="checkbox" checked={this.state.b3} onChange={this.b3change}/>
          <label>{this.props.breakfast.b3.title}</label>
          <img src={this.props.breakfast.b3.image}></img>
          <div>{this.props.breakfast.b3.summary}</div>
          <a href={this.props.breakfast.b3.source}>View Recipes</a>
          </div>
        
      </div></Fragment>
            }
                  if(this.props.lunch === null) {
                    resultl = <Fragment>
                    <div>No Recipes Found</div>
                    </Fragment>
                  } else if(this.props.lunch.l2 === undefined) {
                    resultl = <Fragment>
                       <div id={"lunch"}>
               <h1>LUNCH</h1>
          <div id='options'>
          <input name="l1" type="checkbox" checked={this.state.l1} onChange={this.l1change}/>
        <label>{this.props.lunch.l1.title}</label>
          <img src={this.props.lunch.l1.image}></img>
          <div>{this.props.lunch.l1.summary}</div>
          <a href={this.props.lunch.l1.source}>View Recipes</a>
          </div></div>
                    </Fragment>
                  } else if(this.props.lunch.l3 === undefined) {
                      resultl = <Fragment>
                        <div id={"lunch"}>
        <h1>LUNCH</h1>
          
          <div id='options'>
          <input name="l1" type="checkbox" checked={this.state.l1} onChange={this.l1change}/>
        <label>{this.props.lunch.l1.title}</label>
          <img src={this.props.lunch.l1.image}></img>
          <div>{this.props.lunch.l1.summary}</div>
          <a href={this.props.lunch.l1.source}>View Recipes</a>
          </div>
        
        <div id='options'>
          <input name="l2" type="checkbox" checked={this.state.l2} onChange={this.l2change}/>
          <label>{this.props.lunch.l2.title}</label>
          <img src={this.props.lunch.l2.image}></img>
          <div>{this.props.lunch.l2.summary}</div>
          <a href={this.props.lunch.l2.source}>View Recipes</a>
        </div></div>
                      </Fragment>
                  } else {
                    resultl =
                    <Fragment>

      <div id={"lunch"}>
        <h1>LUNCH</h1>
          
          <div id='options'>
          <input name="l1" type="checkbox" checked={this.state.l1} onChange={this.l1change}/>
        <label>{this.props.lunch.l1.title}</label>
          <img src={this.props.lunch.l1.image}></img>
          <div>{this.props.lunch.l1.summary}</div>
          <a href={this.props.lunch.l1.source}>View Recipes</a>
          </div>
        
        <div id='options'>
          <input name="l2" type="checkbox" checked={this.state.l2} onChange={this.l2change}/>
          <label>{this.props.lunch.l2.title}</label>
          <img src={this.props.lunch.l2.image}></img>
          <div>{this.props.lunch.l2.summary}</div>
          <a href={this.props.lunch.l2.source}>View Recipes</a>
        </div>
        
        <div id='options'>
          <input name="l3" type="checkbox" checked={this.state.l3} onChange={this.l3change}/>
          <label>{this.props.lunch.l3.title}</label>
          <img src={this.props.lunch.l3.image}></img>
          <div>{this.props.lunch.l3.summary}</div>
          <a href={this.props.lunch.l3.source}>View Recipes</a>
        </div>


      </div>
                    </Fragment>
     }
          if(this.props.dinner === null) {
            resultd = <Fragment>
            <div>No Recipes Found</div>
            </Fragment>
          } else if(this.props.dinner.d2 === undefined) {
            resultd = <Fragment>
              <div id={"dinner"}>
        <h1>DINNER</h1>

        <div id='options'>
          <input name="d1" type="checkbox" checked={this.state.d1} onChange={this.d1change}/>
        <label>{this.props.dinner.d1.title}</label>
          <img src={this.props.dinner.d1.image}></img>
          <div>{this.props.dinner.d1.summary}</div>
          <a href={this.props.dinner.d1.source}>View Recipes</a>
        </div></div>
            </Fragment>
          } else if(this.props.dinner.d3 === undefined) {
              resultd = <Fragment>
                <div id={"dinner"}>
        <h1>DINNER</h1>

        <div id='options'>
          <input name="d1" type="checkbox" checked={this.state.d1} onChange={this.d1change}/>
        <label>{this.props.dinner.d1.title}</label>
          <img src={this.props.dinner.d1.image}></img>
          <div>{this.props.dinner.d1.summary}</div>
          <a href={this.props.dinner.d1.source}>View Recipes</a>
        </div>
        
        <div id='options'>
       <input name="d2" type="checkbox" checked={this.state.d2} onChange={this.d2change}/>
          <label>{this.props.dinner.d2.title}</label>
       <img src={this.props.dinner.d2.image}></img>
          <div>{this.props.dinner.d2.summary}</div>
          <a href={this.props.dinner.d2.source}>View Recipes</a>
        </div></div>
              </Fragment>
          } else {
            resultd =
            <Fragment>
      <div id={"dinner"}>
        <h1>DINNER</h1>

        <div id='options'>
          <input name="d1" type="checkbox" checked={this.state.d1} onChange={this.d1change}/>
        <label>{this.props.dinner.d1.title}</label>
          <img src={this.props.dinner.d1.image}></img>
          <div>{this.props.dinner.d1.summary}</div>
          <a href={this.props.dinner.d1.source}>View Recipes</a>
        </div>
        
        <div id='options'>
       <input name="d2" type="checkbox" checked={this.state.d2} onChange={this.d2change}/>
          <label>{this.props.dinner.d2.title}</label>
       <img src={this.props.dinner.d2.image}></img>
          <div>{this.props.dinner.d2.summary}</div>
          <a href={this.props.dinner.d2.source}>View Recipes</a>
        </div>
        
        <div id='options'>
          <input name="d3" type="checkbox" checked={this.state.d3} onChange={this.d3change}/>
          <label>{this.props.dinner.d3.title}</label>
          <img src={this.props.dinner.d3.image}></img>
          <div>{this.props.dinner.d3.summary}</div>
          <a href={this.props.dinner.d3.source}>View Recipes</a>
        </div>
       

      </div>
      <button type="button" name="saverecipe" id="saverecipe" onClick={this.saveRecipe} >SAVE RECIPES</button>

            </Fragment>
          }
      }else if(this.props.result === "one"){
        results=
        <Fragment>
         <div id={"breakfast"}>
        <h1>BREAKFAST</h1>
        
        <div id='options'>
          <input name="c1" type="checkbox" checked={this.state.c1} onChange={this.consumedChange}/>
        <label>{this.props.breakfast.b1.title}</label>
          <img src={this.props.breakfast.b1.image}></img>
          <div>{this.props.breakfast.b1.summary}</div>
          <a href={this.props.breakfast.b1.source}>View Recipes</a>
        </div>
        
      
      </div>
      <div id={"lunch"}>
        <h1>LUNCH</h1>

        <div id='options'>
          <input name="c2" type="checkbox" checked={this.state.c2} onChange={this.consumedChange}/>
        <label>{this.props.lunch.l1.title}</label>
          <img src={this.props.lunch.l1.image}></img>
          <div>{this.props.lunch.l1.summary}</div>
          <a href={this.props.lunch.l1.source}>View Recipes</a>
        </div>
        

      </div>
      <div id={"dinner"}>
        <h1>DINNER</h1>
        
        <div id='options'>
          <input name="c3" type="checkbox" checked={this.state.c3} onChange={this.consumedChange}/>
        <label>{this.props.dinner.d1.title}</label>
          <img src={this.props.dinner.d1.image}></img>
          <div>{this.props.dinner.d1.summary}</div>
          <a href={this.props.dinner.d1.source}>View Recipes</a>
        </div>
        

      </div>
        <Goal consumed={this.state.consumed} />
     
     </Fragment>
      }


      return (
        <div id={"results"}>
          {results}
          {resultb}
          {resultl}
          {resultd}
         
          
        </div>
      );
    }
  }