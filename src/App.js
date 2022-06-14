import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React,{ Component } from 'react';
import AddTodo from "./addTodo";
import TodoItem from './TodoItem';

// App.js is a entry point pure project ka 

class App extends Component
{
  state=
  {
    todos: []
  };

componentDidMount() {
  axios.get("http://localhost:3322/todos").then((result) =>{
       this.setState({
        todos: result.data
      });
  });
}

toggleComplete =(index) => 
{
  const {todos} = this.state;
  const todo =  todos[index];
  const newTodos = this.state.todos.map((todo,i) =>
  {
      if(index === i){
        return(
        {
          ...todo,
          completed: !todo.completed
        }
        );
      }
      return todo;
  });
// API call for update 
  axios.put("http://localhost:3322/todos/" + todo.id, {
    ...todo,
    completed: !todo.completed
  }).then(() => {
    this.setState(
      {
        todos : newTodos
      });
  })
};
deletetTodoFromState = (index) => 
{
  const {todos} = this.state;
  const todo =  todos[index];
// Delete API call for Delete -- delete
  axios.delete("http://localhost:3322/todos/" + todo.id).then(()=>
  {
    const newTodos =todos.filter((todo, i) =>
    {

      return index === i ? false : true;
    });
    this.setState({
      todos: newTodos
    });
  });
};
 

  

editTodoFromState =(index , newText) => 
{
  const {todos} =this.state;
  const todo = todos[index];
// edit API for updating --- put
  axios.put("http://localhost:3322/todos/" + todo.id,{
    ...todo,
    text: newText
  }).then(()=>{
    const newTodos = this.state.todos.map((todo , i) => 
  {
    if(index === i)
    {
      return {
        ...todo, 
        text: newText
      };
    }
    return todo;
  });
  this.setState({
    todos: newTodos
  });
});
};

  

addTodoToState = text =>
  {
    // API call for add a data  -- create - post
    axios.post("http://localhost:3322/todos",{
      text,
      completed: false
    })
    .then((result) =>{
      const newTodos =this.state.todos.concat(
        {
           text,
           completed : false
         });
         this.setState(
         {
           todos : newTodos
         });
    });
  };

  render(){
    return(
      <div className="App">
        {this.state.todos.map((todo,index) =>{
          return (
            // Component 1
          <TodoItem
             toggleComplete={this.toggleComplete}
             deletetTodoFromState={this.deletetTodoFromState}
             editTodoFromState={this.editTodoFromState}
             todo={todo} 
             index={index} // 2nd type jo index pass kara hai vo todoItem Component ke under ham use kar paye
             key={index} //react specification hai isliye ham yaha use nhi kar sakte 
             />
          );
        })}
        {/*component 2  */}
        <AddTodo addTodoToState={this.addTodoToState} />
      </div>
    );
  }
 
}
export default App;
