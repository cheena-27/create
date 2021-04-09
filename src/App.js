
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
  persons:[
     {name:'cheena', age:31},
     {name:'aadi', age:29},
     {name:'sayali', age:26}
  ] 
  }

  switchNameHandler = () => {

    //console.log('clicked');
    this.setState({
       persons:[
     {name:'cheena_adi', age:31},
     {name:'aadi', age:29},
     {name:'sayali', age:25}
  ] 

    } )
  }
  
  render() {
  return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Working </Person>
        <Person name= {this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
      );
   }
}

export default App;




