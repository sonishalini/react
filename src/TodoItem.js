import React from "react";

class TodoItem extends React.Component
{
    clickHandler =() =>{
        this.props.toggleComplete(this.props.index);
    }
    deleteTodo =() =>{
        this.props.deletetTodoFromState(this.props.index);
    }
    render()
    {
        const {todo} =this.props;
        return(
            <li 
                
                className={todo.completed ? "completed" : ""}
            >
               <sapan  onClick={this.clickHandler}> {todo.text}</sapan>
                <span>
                    <button onClick={this.deleteTodo}>Delete</button>
                </span>
            </li>
        );
    }
}
export default TodoItem;