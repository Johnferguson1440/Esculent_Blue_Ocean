import React, { Component, Fragment } from 'react';
import Checkbox from "./checkbox.js"
import {intoleranceItems, nutrientItems} from "./option"
import Ingredientresults from "./Ingredientresults";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





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
      //  allergy
        allergyb:new Map(),
        allergyl:new Map(),
        allergyd:new Map(),
      
        selectedDate: null,
        //decideds what is conditionally rendered between ingredient selection, ingredient results, or user selected recipes
        //start date for date picker
        startDate: new Date(),
         breakfast: null,
        //   b1:{title:'data[0].title',summary:'data[0].summary', image:'data[0].image', source:'data[0].spoonacularSourceUrl'},
        //   b2:{title:'data[1].title',summary:'data[1].summary', image:'data[1].image', source:'data[1].spoonacularSourceUrl'},
        //   b3:{title:'data[2].title',summary:'data[2].summary', image:'data[2].image', source:'data[2].spoonacularSourceUrl'}
        // },
        lunch:  null,
        //   l1:{title:'data[0].title',summary:'data[0].summary', image:'data[0].image', source:'data[0].spoonacularSourceUrl'},
        //   l2:{title:'data[1].title',summary:'data[1].summary', image:'data[1].image', source:'data[1].spoonacularSourceUrl'},
        //   l3:{title:'data[2].title',summary:'data[2].summary', image:'data[2].image', source:'data[2].spoonacularSourceUrl'}
        // },
        dinner:  null,
        //   d1:{title:'data[0].title',summary:'data[0].summary', image:'data[0].image', source:'data[0].spoonacularSourceUrl'},
        //   d2:{title:'data[1].title',summary:'data[1].summary', image:'data[1].image', source:'data[1].spoonacularSourceUrl'},
        //   d3:{title:'data[2].title',summary:'data[2].summary', image:'data[2].image', source:'data[2].spoonacularSourceUrl'}
        // },
        ingredientRender: "",
        results: "",

        c1: false,
        c2:false,
        c3: false,
        consumed: 0,
       

      };
      this.dateChange= this.dateChange.bind(this);
      this.toggleAllergyb= this.toggleAllergyb.bind(this);
      this.toggleAllergyl= this.toggleAllergyl.bind(this);
      this.toggleAllergyd= this.toggleAllergyd.bind(this);
      this.toggleCheckboxChangeb= this.toggleCheckboxChangeb.bind(this);
      this.toggleCheckboxChangel= this.toggleCheckboxChangel.bind(this);
      this.toggleCheckboxChanged= this.toggleCheckboxChanged.bind(this);
      this.oneResult=this.oneResult.bind(this);
      this.myfunction=this.myfunction.bind(this);
      this.c1change= this.c1change.bind(this);
      this.c2change= this.c2change.bind(this);
      this.c3change= this.c3change.bind(this);  
      this.updateMeals=this.updateMeals.bind(this);  
      
      
    }

    //method to update the breakfast lunch and dinner state with passed in params
    oneResult(x,y,z){
      this.setState({breakfast: x});
      this.setState({lunch:y});
      this.setState({dinner: z});
      this.setState({results:"one"})
    }

    dateChange(date){      
      this.setState({startDate:date});
      
      //when date is selected need to set state to current date
      this.setState({selectedDate: date.toLocaleDateString()}, ()=>{
        
        
        
        var datePicked =this.state.selectedDate;
        console.log(datePicked);
        var name=this.props.name
        const options={
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({datePicked,name})
        };


        //make api call to db to see if user has info for that date yet
        fetch("/api/date", options)
        .then((res)=>{ return res.json();})
        .then((data)=>{ 
          //conditional to change state for conditional render if infoexist/info doesnt exist      
          // if user doesnt have info for that date
          if(data=== "No Recipe"){
            this.setState({ingredientRender: "pick"});

          }else{
          //setstate to be passed down if user exist
          this.setState({breakfast:data.mealPlan[datePicked].breakfast});
          this.setState({lunch: data.mealPlan[datePicked].lunch});
          this.setState({dinner:data.mealPlan[datePicked].dinner})
          this.setState({textb: data.mealPlan[datePicked].bingredients});
          this.setState({textl:data.mealPlan[datePicked].lingredients});
          this.setState({textd:data.mealPlan[datePicked].dingredients});
          this.setState({consumedB:data.mealPlan[datePicked].consumedB});
          this.setState({consumedL:data.mealPlan[datePicked].consumedL});
          this.setState({consumedD:data.mealPlan[datePicked].consumedD});
          //call method from ingredient results to change states if user already has recipes for that date
          this.setState({results: "one"});
          this.setState({ingredientRender: "result"});
          this.props.favorite();
          }
        })
      });      

    }  

    updateMeals(favN,favL){
      let name = this.props.name;
      let date = this.state.selectedDate;
      let breakfast = this.state.breakfast; 
      let lunch = this.state.lunch;
      let dinner = this.state.dinner;
      let btext= this.state.textb;
      let ltext= this.state.textl;
      let dtext= this.state.textd;
      let consumedB=this.state.c1;
      let consumedL= this.state.c2;
      let consumedD= this.state.c3;
      let consumed= this.state.consumed
      let favoriteL= favL
      let favoriteN=favN
      
      
      


      const planSave ={
        method:'Post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, date, favoriteN, favoriteL,breakfast, lunch, dinner,btext,ltext,dtext,consumedB,consumedL,consumedD,consumed})
      };
      fetch('/save', planSave)
      .then(
        this.props.favorite()
        
       
        //call method from ingredient selection to make get request for favorites
      )
      
      

    }


    c1change(){
      this.setState({c1: !this.state.c1},()=>{
      let breakCon= this.state.c1;
      let lunchCon=this.state.c2;
      let dinnerCon=this.state.c3;
     
      //conditional if alert user says yes
      //favN=this.state.breakfast.b1.title;
      //favL=this.state.breakfast.b1.source;

      //else 
      //favN="";
      //favL= "";
      

      if(breakCon === true & lunchCon===true & dinnerCon===true){
        this.setState({consumed: 100});
       
      }else if(breakCon===true & lunchCon===true || breakCon===true & dinnerCon===true || lunchCon===true & dinnerCon===true){
        this.setState({consumed: 66});
       
      }else if(breakCon===true || lunchCon===true || dinnerCon===true){
        this.setState({consumed: 33});
        
      }else{
        this.setState({consumed: 0});
        
      }




      })
    }
    c2change(){
      this.setState({c2: !this.state.c2},()=>{
        let breakCon= this.state.c1;
      let lunchCon=this.state.c2;
      let dinnerCon=this.state.c3;
      
      
      //conditional if alert user says yes
      //favN=this.state.lunch.l1.title+",";
      //favL=this.state.lunch.l1.source+",";
      //else 
      //favN=""
      //favL= ""

      
      if(breakCon === true & lunchCon===true & dinnerCon===true){
        this.setState({consumed: 100});
        
      }else if(breakCon===true & lunchCon===true || breakCon===true & dinnerCon===true || lunchCon===true & dinnerCon===true){
        this.setState({consumed: 66});
       
      }else if(breakCon===true || lunchCon===true || dinnerCon===true){
        this.setState({consumed: 33});
        
      }else{
        this.setState({consumed: 0});
        
      }

      

      })
    }
    c3change(){
      this.setState({c3: !this.state.c3},()=>{
        let breakCon= this.state.c1;
      let lunchCon=this.state.c2;
      let dinnerCon=this.state.c3;
      


      //conditional if alert user says yes
      //favN=this.state.dinner.d1.title;
      //favL=this.state.dinner.d1.source;
      //else 
      //favN="";
      //favL="";
      
      if(breakCon === true & lunchCon===true & dinnerCon===true){
        this.setState({consumed: 100});
        
      }else if(breakCon===true & lunchCon===true || breakCon===true & dinnerCon===true || lunchCon===true & dinnerCon===true){
        this.setState({consumed: 66});
        
      }else if(breakCon===true || lunchCon===true || dinnerCon===true){
        this.setState({consumed: 33});
       
      }else{
        this.setState({consumed: 0});
        
      }
      


      })
    }


    //adds the clicked item to the state checked boxes and adds true or false for checked or not breakfast
    toggleCheckboxChangeb(e){
      
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItemsb: prevState.checkedItemsb.set(item, isChecked) }));
      // console.log(this.state.checkedItemsb);
    }
    ////adds the clicked item to the state checked boxes and adds true or false for checked or not lunch
    toggleCheckboxChangel(e){
      
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItemsl: prevState.checkedItemsl.set(item, isChecked) }));
    // console.log(this.state.checkedItemsl);
  }
  ////adds the clicked item to the state checked boxes and adds true or false for checked or not dinner
  toggleCheckboxChanged(e){
      
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItemsd: prevState.checkedItemsd.set(item, isChecked) }));
  // console.log(this.state.checkedItemsd);
}

toggleAllergyb(e){
      
  const item = e.target.name;
  const isChecked = e.target.checked;
  this.setState(prevState => ({ allergyb: prevState.allergyb.set(item, isChecked) }));
// console.log(this.state.allergyb);
}

toggleAllergyl(e){
      
  const item = e.target.name;
  const isChecked = e.target.checked;
  this.setState(prevState => ({ allergyl: prevState.allergyl.set(item, isChecked) }));
// console.log(this.state.allergyl);
}

toggleAllergyd(e){
      
  const item = e.target.name;
  const isChecked = e.target.checked;
  this.setState(prevState => ({ allergyd: prevState.allergyd.set(item, isChecked) }));
// console.log(this.state.allergyd);
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
     
      
    }
    
  
  


    
    myfunction(){
      //*2event listner login coponent
     // const search = document.getElementById('searchrecipe');
      
      const self = this;
      //search.addEventListener('click', function(event){
        // allergy for breakfast
        let bal = [];
        function allb(value, key, map) {
          if(value===true) {
            bal.push(key);
          } 
        } 
        self.state.allergyb.forEach(allb);
        let breakfastAllergy = '';
        for (var a = 0; a < bal.length; a++) {
          breakfastAllergy = breakfastAllergy + bal[a] + ',';
        }
        // nutrient for breakfast
        const bnut = [];
        function nutb(value, key, map){
          if(value===true) {
            bnut.push(key);
          }
        }
        self.state.checkedItemsb.forEach(nutb);
        let breakfastNutrient = '';
        for (var n = 0; n < bnut.length; n++) {
          breakfastNutrient = breakfastNutrient + 'min' + bnut[n] + '=10&';
        }
        var bApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=dedf920bfe67493f94ff2565a7847e9c&number=3&instructionsRequired=true&addRecipeInformation=true&type=breakfast&query=${self.state.textb}&${breakfastNutrient}intolerances=${breakfastAllergy.slice(0,-1)}`
        
        // allergy for lunch
          let lal = [];
          function alll(value, key, map) {
            if(value===true) {
              lal.push(key);
            }
          }
          self.state.allergyl.forEach(alll);
          let lunchAllergy = '';
          for (var b =0; b<lal.length; b++) {
            lunchAllergy = lunchAllergy + lal[b] + ',';
          }
        // nutrient for lunch
            const lnut = [];
            function nutl(value, key, map) {
              if(value===true) {
                lnut.push(key);
              }
            }
            self.state.checkedItemsl.forEach(nutl);
              let lunchNutrient = '';
              for (var o = 0; o < lnut.length; o++) {
                lunchNutrient = lunchNutrient + 'min' + lnut[o] + '=10&';
              }
          var lApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=dedf920bfe67493f94ff2565a7847e9c&number=3&instructionsRequired=true&addRecipeInformation=true&query=${self.state.textl}&${lunchNutrient}intolerances=${lunchAllergy.slice(0,-1)}`
        // allergy for dinner
            const dal = [];
            function alld(value, key, map) {
              if(value===true) {
                dal.push(key);
              }
      }
      self.state.allergyd.forEach(alld);
      let dinnerAllergy = '';
      for (var c =0; c< dal.length; c++) {
        dinnerAllergy = dinnerAllergy + dal[c] + ',';
      }
        // nutrient for dinner
        const dnut = [];
        function nutd(value, key, map) {
          if(value===true) {
            dnut.push(key);
          }
        }
        self.state.checkedItemsd.forEach(nutd);
        let dinnerNutrient = '';
        for (var p=0; p<dnut.length; p++) {
          dinnerNutrient = dinnerNutrient + 'min' + dnut[n] + '=10&';
        }
        var dApi = `https://api.spoonacular.com/recipes/complexSearch?apiKey=dedf920bfe67493f94ff2565a7847e9c&number=3&instructionsRequired=true&addRecipeInformation=true&query=${self.state.textd}&${dinnerNutrient}intolerances=${dinnerAllergy.slice(0,-1)}`
        // we need to make three separate fetch request one for breakfast lunch and dinner.
        // get request breakfast
      
        fetch(`${bApi}`)
        .then((res)=>{
          return res.json()
        }).then((data)=>{

          
          //conditional to create how many based on array.length
          
          if(data.results.length === 3) {
            self.setState({breakfast: {
              b1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
              b2:{title:data.results[1].title,summary:data.results[1].summary, image:data.results[1].image, source:data.results[1].spoonacularSourceUrl},
              b3:{title:data.results[2].title,summary:data.results[2].summary, image:data.results[2].image, source:data.results[2].spoonacularSourceUrl}
            }},()=>{
              
              lunch();
            });

          } else if(data.results.length === 2) {
            self.setState({breakfast: {
              b1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
              b2:{title:data.results[1].title,summary:data.results[1].summary, image:data.results[1].image, source:data.results[1].spoonacularSourceUrl},
            }},()=>{
              lunch();
            });
          } else if(data.results.length === 1) {
            self.setState({breakfast: {
              b1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
            }},()=>{
              lunch();
            });
          } else{
            alert('No Recipes Found in Breakfast change selections');
          }

        })
        // get request lunch
        function lunch(){
        
        fetch(`${lApi}`)
        .then((res)=> {
          return res.json()
        }).then((data)=>{
          if(data.results.length === 3){
            self.setState({lunch:  {
              l1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
              l2:{title:data.results[1].title,summary:data.results[1].summary, image:data.results[1].image, source:data.results[1].spoonacularSourceUrl},
              l3:{title:data.results[2].title,summary:data.results[2].summary, image:data.results[2].image, source:data.results[2].spoonacularSourceUrl}
            }},()=>{
              dinner();
            });
          } else if(data.results.length === 2){
            self.setState({lunch:  {
              l1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
              l2:{title:data.results[1].title,summary:data.results[1].summary, image:data.results[1].image, source:data.results[1].spoonacularSourceUrl},
            }},()=>{
              dinner();
            });
          } else if(data.results.length === 1){
            self.setState({lunch:  {
              l1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
            }},()=>{
              dinner();
            });
          } else {
            alert('No Recipes Found for Lunch change selections');
          }
        })
      }


      function dinner(){
        // get request dinner
        fetch(`${dApi}`)
        .then((res)=> {
          return res.json()
        }).then((data)=> {
          if(data.results.length ===3){
            self.setState({dinner: {
              d1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
              d2:{title:data.results[1].title,summary:data.results[1].summary, image:data.results[1].image, source:data.results[1].spoonacularSourceUrl},
              d3:{title:data.results[2].title,summary:data.results[2].summary, image:data.results[2].image, source:data.results[2].spoonacularSourceUrl}
            }},()=>{
              self.setState({ingredientRender: 'result'});
              self.setState({results: 'many'});
            });
          } else if(data.results.length === 2){
            self.setState({dinner: {
              d1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
              d2:{title:data.results[1].title,summary:data.results[1].summary, image:data.results[1].image, source:data.results[1].spoonacularSourceUrl},
            }},()=>{
              self.setState({ingredientRender: 'result'});
              self.setState({results: 'many'});
            });
          } else if(data.results.length === 1){
            self.setState({dinner: {
              d1:{title:data.results[0].title,summary:data.results[0].summary, image:data.results[0].image, source:data.results[0].spoonacularSourceUrl},
            }},()=>{
              self.setState({ingredientRender: 'result'});
              self.setState({results: 'many'}); 
            });
          } else {
            alert('No Recipes Found for Dinner change selections');
          }
        })
      }

        
        //need to grab the info needed from response and save in an object 
      

        // we need to see what are our response back from API.

        // need to setstate of ingredient render to result and results to many
      //})
    }
    

  
    render() {

     

      //conditional based off state value to render nothing, ingredient selector divs or ingredient results
      let currentShow;
      if(this.state.ingredientRender==="pick"){
        currentShow= <div id={"pickingredients"}>    

        <div id={"breakfast"} className={"mealpick"}>
        <h1>BREAKFAST</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>
        <h3>Intolerance</h3>
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox id={'box'} name={item.name} checked={this.state.allergyb.get(item.name)} onChange={this.toggleAllergyb}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>
        <h3>Nutrients</h3>
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox id={'box'} name={item.name} checked={this.state.checkedItemsb.get(item.name)} onChange={this.toggleCheckboxChangeb}/>
          </label>
        ))}
        </div>
        <div id={"addIng"}>
        <h3>Add Ingredients</h3>
          <textarea id={"ingText"} cols="30" rows="10" value={this.state.textb} onChange={this.Btext.bind(this)}></textarea>
          
        </div>

        </div>
        </div>
        <div id={"lunch"}  className={"mealpick"}>
        <h1>LUNCH</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>
        <h3>Intolerance</h3>
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox id={'box'} name={item.name} checked={this.state.allergyl.get(item.name)} onChange={this.toggleAllergyl}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>
        <h3>Nutrients</h3>
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox id={'box'} name={item.name} checked={this.state.checkedItemsl.get(item.name)} onChange={this.toggleCheckboxChangel}/>
          </label>
        ))}
        </div>
        <div id={"addIng"}>
        <h3>Add Ingredients</h3>
       
        <textarea id={"ingText"} cols="30" rows="10" value={this.state.textl} onChange={this.Ltext.bind(this)}></textarea>

        </div>

        </div>
        </div>
        <div id={"dinner"}  className={"mealpick"}>
        <h1>DINNER</h1>
        <div id={"selections"}>
        <div id={"intolerance"}>
        <h3>Intolerance</h3>
        {intoleranceItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox id={'box'} name={item.name} checked={this.state.allergyd.get(item.name)} onChange={this.toggleAllergyd}/>
          </label>
        ))}
        </div>
        <div id={"nutrients"}>
        <h3>Nutrients</h3>   
        {nutrientItems.map(item=>(
          <label key={item.key}>
            {item.name}
            <Checkbox id={'box'} name={item.name} checked={this.state.checkedItemsd.get(item.name)} onChange={this.toggleCheckboxChanged}/>
          </label>
        ))}
        </div>
        <div id={"addIng"}>
        <h3>Add Ingredients</h3>
        
        <textarea id={"ingText"} cols="30" rows="10" value={this.state.textd} onChange={this.Dtext.bind(this)}></textarea>

        </div>

        </div> 
        </div>
       <button type="button" name="searchrecipe" id="searchrecipe" onClick={this.myfunction}>SEARCH RECIPES</button>
          
         
          
        </div>
      }else if(this.state.ingredientRender==="result"){
        currentShow=<Ingredientresults updateMeals={this.updateMeals} consumed={this.state.consumed} c1={this.state.c1} c2={this.state.c2} c3={this.state.c3} c1change={this.c1change} c2change={this.c2change} c3change={this.c3change} btext = {this.state.textb}  ltext = {this.state.textl} dtext = {this.state.textd} date={this.state.selectedDate} name={this.props.name} oneresult={this.oneResult} result={this.state.results} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} />
      }
      


      return (
<Fragment>
<div className={"datepicker"}>
        
        <DatePicker dateFormat="MM/dd/yyyy" selected={this.state.startDate} 
        onChange={this.dateChange} 
        name="startDate"   />
        </div>        

        <div id={"ingredientrender"}>
          {currentShow}       
        </div>
     
        </Fragment>
      );
    }
  }