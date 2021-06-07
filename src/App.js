import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TrafficLight from './components/TrafficLight/TrafficLight';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TrafficLight />
      </div>
    );
  }
}

export default App;
