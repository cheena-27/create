
import React, { Component } from 'react';
import './conatiners/App.css';
import Person from './components/Person/Person.js';



class App extends Component {
  state = {
  persons:[
      {id: '1',name:'A', age:31},
      {id: '2',name:'B', age:29},
      {id: '3',name:'C', age:26}
  ], 
    otherState : 'some other value',
    ShowPersons: false
   }

   togglePersonHandler = () => {
   const doesShow = this.state.ShowPersons;
  this.setState({ShowPersons: !doesShow});

   }

   nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
     });
     const person = {...this.state.persons[personIndex]};
    
     person.name= event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex]= person;

     this.setState({persons:persons});

   }

   deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
  const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

   }
  
   render() {
    const style = {
     backgroundColor: 'green',
     color: 'white',
     font: 'inherit',
     border: '1px solid black',
     padding: '8px',
     cursor: 'pointer',
  };
   
   let persons = null;
    if(this.state.ShowPersons === true) {
     persons = (
          <div>
           {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} 
            name={person.name} 
             age={person.age} 
             key={person.id}
             changed={(event) => this.nameChangedHandler(event, person.id)}/>
           })}
         
    
     </div>
     );

     style.backgroundColor = 'red';
    }

     const classes = [];
     if(this.state.persons.length <= 2){
       classes.push('red'); 
     }
     if (this.state.persons.length <= 1){
       classes.push('bold'); 
     }
  
   return (
       <div className="App">
       <h1>Hi, I am a React App</h1>
         <p className={classes.join('')}>This is really working !</p>
         <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
         {persons}
        </div>
        <p> <AddUser /> </p>
       );
    }
 }


export default App;




