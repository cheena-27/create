
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
  persons:[
     {name:'A', age:31},
     {name:'B', age:29},
     {name:'C', age:26}
  ], 
   otherState : 'some other value',
   ShowPersons: false
  }

  deletePersonHandler = () => {

  }

  togglePersonHandler = () => {
  const doesShow = this.state.ShowPersons;
  this.setState({ShowPersons: !doesShow});

  }
  
  render() {
   const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
 };
   
   let persons = null;
   if(this.state.ShowPersons === true) {
    persons = (
         <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
    </div>
    );
   }

  return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working !</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
      );
   }
}

export default App;




