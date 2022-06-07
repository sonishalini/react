import React from "react";

class AddTodo extends React.Component{
    state={
        todotext: ""
    };

    changeTodoText = event => {
        this.setState({
            todotext: event.target.value
        });
    }

    submitHandler =(event)=>{
        // isse browser reload nahi hota hai line nu. 6 
        event.preventDefault();

        this.props.addTodoToState(this.state.todotext);

        this.setState({
            todotext: ""
        });
    };

    render(){
        return <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" 
                onChange={this.changeTodoText}
                value={this.state.todotext}/>
                <button type="submit"> Add Todo</button>
            </form>
        </div>
    }
}

export default AddTodo;