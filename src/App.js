import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import AddTodo from "./addTodo";

// App.js is a entry point pure project ka 

class App extends Component{
  state={
    todos: [
      {
        text: "Buy Milk"
      },
      {
        text: "Buy Tea"
      },
      {
        text: "Buy Coffee"
       }
    ]
  };

addTodoState = text =>{
  const newTodos =this.state.todos.concat({
    text
  });

this.setState({
  todos:newTodos
});

};
  render(){
    return<div className='App'>
      {this.state.todos.map((todo ,index)=>{
        return <li key={index}>{todo.text}</li>;

      })}
      <AddTodo addTodoState={this.addTodoState}/>
    </div>
  }
 
}
export default App;
