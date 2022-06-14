import React from "react";
import axios from "axios";

class Dashboard extends React.Component 
{
    // Data Add in state
    //1st way
    /*constructor(props) {
        super(props);
        this.state ={
            users: []
        };
    }*/
    state = {
         users:[],
         selectedUser: ""
    };

    componentDidMount(){
        // Read Method
        axios.get("http://jsonplaceholder.typicode.com/users").then(result => {

            // add in arrya jo data aaya 
            this.setState
            ({
                users: result.data,
                selectedUser: result.data[0]
            });
        });
    }

    changeSelectedUser = user =>{
        this.setState({selectedUser: user})
    };

    render(){
        const { users } = this.state;

        return (
        <div className="container">
            <div className="row">
                <section className="col-sm">User List
                 <ul className="list-group">
                     {users.map((user)=>{
                         return <li key={user.id} className="list-group-item" onClick={()=>{
                             this.changeSelectedUser(user);
                         }}>
                             {user.name}</li>
                     })}
                   
                </ul>
               </section>
                 <section className="col-md">Post Detalis</section>
            </div>
        </div>
        );
    }
}

export default Dashboard;


