import React from "react";

class TodoItem extends React.Component
{
    state ={
        isEditing : false
    };

    toggleEditing =() =>
    {
        this.setState
        ({
            isEditing: !this.state.isEditing
        })
    }

    clickHandler =() =>{
        this.props.toggleComplete(this.props.index);
    }
    
    deleteTodo =() =>{
        this.props.deletetTodoFromState(this.props.index);
    }

    editTodoSubmitHandler = (event) => {
        event.preventDefault();
    }

    render()
    {
        const {todo} =this.props;
        
        if (this.state.isEditing)
         {
             return (
                 <li>
                     <form onSubmit={this.editTodoSubmitHandler}>
                         <input type="text" defaultValue={todo.text}/>
                         <button type="submit">Save</button>
                         <button onClick={this.toggleEditing}>Cancel</button>
                     </form>
                 </li>
             );
         }



        return(
            <li 
                
                className={todo.completed ? "completed" : ""}
            >
               <sapan  onClick={this.clickHandler}> {todo.text}</sapan>
                <span>
                    <button onClick={this.toggleEditing}>Edit</button>
                    <button onClick={this.deleteTodo}>Delete</button>
                </span>
            </li>
        );
    }
}
export default TodoItem;