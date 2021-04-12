
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
  persons:[
     {name:'A', age:31},
     {name:'B', age:29},
     {name:'C', age:26}
  ] 
   otherState : 'some other value',
   ShowPersons: false
  }

  switchNameHandler = () => {

    //console.log('clicked');
    this.setState({
       persons:[
     {name:'A_B', age:31},
     {name:'B', age:29},
     {name:'C', age:25}
  ] 

    } )
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

  return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working !</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch name</button>
          
          { this.state.ShowPersons === true ? 
            <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Working </Person>
          <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>
          </div> : null 

        }

      </div>
      );
   }
}

export default App;




