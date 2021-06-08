import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
// import TrafficLight from './components/TrafficLight/TrafficLight';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList : [
        {title: 'Go to school',  isComplete: true},
        {title: 'Go to bed'},
        {title: 'Go to lunch',  isComplete: true}
      ],
    }
  }

  onChangeItem(item) {
    this.setState({
      todoList : this.state.todoList.map((todo) => {
        return todo === item ? {...todo, isComplete: !item.isComplete} : {...todo};
      })
    });
  }

  onKeyUp = (event) => {
    if(event.keyCode === 13){
      if(event.target.value.trim() !== ""){
          this.setState({
          todoList : [
            {title: event.target.value, isComplete: false},
            ...this.state.todoList
          ]
        });
        event.target.value = "";
      }
      console.log(this.state);
    // localStorage.setItem("todo", JSON.stringify(this.state.todoList));
    }
  }

  // onChange = (event) => {
  //   this.setState({
  //     newItem: event.target.value,
  //   });
  // }

  render(){
    let { todoList } = this.state;
    return (
      <div className="App">
            <div className="header">
              <i className="fas fa-check"></i>
              <input 
                placeholder="Add a item here" 
                onKeyUp={this.onKeyUp} 
                // value={newItem} 
                // onChange={this.onChange}  
              />
            </div>
       {
         todoList.map((item, index) => 
          <TodoList key={index} item={item} onClick = {() => this.onChangeItem(item)}/>
         )
       }
      </div>
    );
  }
}

export default App;
