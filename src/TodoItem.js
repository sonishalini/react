import React from "react";

class TodoItem extends React.Component
{
    clickHandler =() =>{
        this.props.toggleComplete(this.props.index);
    }
    render()
    {
        const {todo} =this.props;
        return(
            <li 
                onClick={this.clickHandler}
                className={todo.completed ? "completed" : ""}
            >
                {todo.text}
            </li>
        );
    }
}
export default TodoItem;