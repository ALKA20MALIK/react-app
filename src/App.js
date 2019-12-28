import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from "./Person/Person";
import person from './Person/Person';

class App extends Component{

  state={
    persons:[
      {id:'1',name:'alka',age:'27'},
      {id:'2',name:'bhoopendra',age:'25'},
      {id:'3',name:'pooja',age:'30'},
    ],
    otherState:"other state",
    showPersons:false 
  }

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  switchNameHandler=(newName)=>this.setState({
    persons:[
      { name:newName,age:'27'},
      { name:newName,age:'25'},
      { name:newName,age:'31'},
    ],
    otherState:"other state"
  })

  nameChangeHandler=(event, id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id
    })
    
    const person=[...this.state.persons[personIndex]]

    person.name=event.target.value

    const persons=[...this.state.persons]
    persons[personIndex]=person

    this.setState({persons:persons})
  }
  deletePersonHandler=(index)=>{
    //const persons=this.state.persons.slice();
    const persons=[...this.state.persons]
    persons.splice(index,1)
    this.setState({persons: persons})
  }
  render(){
    const style={
      backgroundColor: 'green',
      font: 'inherit',
      border:  '1px solid blue',
      padding: '8px',
      cursor:'pointer',
    };
    let persons=null
    let classes=[]

    if(this.state.persons.length<=2){
      classes.push('red')
    }
    if(this.state.persons.length<=1){
      classes.push('bold')
    }

    if(this.state.showPersons){
      persons=(<div>
                { this.state.persons.map((person,index)=>{
                    return <Person 
                    click={()=>this.deletePersonHandler(index)} 
                    name={person.name}
                    age={person.age}
                    key={person.id} 
                    changed={(event)=>this.nameChangeHandler(event,person.id)}
                    />
                    
                })}
              </div>)
        style.backgroundColor='red'
    }
    return (
      <div className="App">
          <h1 >My First App</h1>
          <p className={classes.join(' ')}>this is dynamic class</p>
          <button style={style} 
          onClick={this.togglePersonsHandler}>toggle person</button>
          {persons}
      </div>
    )
  }

}
export default App

// const app=props => {
//   const [personsState,setPersonsState]= useState({
//     persons:[
//       {name:'alka',age:'27'},
//       {name:'bhoopendra',age:'25'},
//       {name:'pooja',age:'30'},
//     ]
//   });

//   const [otherState,setOtherState]=useState({otherState:"aksoadsa"}) 

// console.log(setPersonsState)
//  const SwitchNameHandler= () =>{
//     setPersonsState({
//       persons:[
//         {name:'malik',age:'27'},
//         {name:'bhoopendra',age:'25'},
//         {name:'pooja',age:'31'}
//       ]
//     })
//   }
  
//     return (
//       <div className="App">
//           <h1>I a,m alka</h1>
//           <button onClick={SwitchNameHandler}>Search</button>
//           <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//           <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//           <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
          
//       </div>
//     );
//    // return React.createElement('div',{className:'App'},'',React.createElement('h1',{},'alka malik'))
//   }
// export default app;
