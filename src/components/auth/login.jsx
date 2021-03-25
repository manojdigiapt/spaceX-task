import React from 'react';
import "./login.scss";
import { message } from 'antd';
class Login extends React.Component {
    constructor(props){
        super(props);
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
          loggedIn = false
        }
        this.state = {
            user: "",
            password: "",
            role: null,
            loggedIn,
            error: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleRoleChange = (e) => {
        console.log("value", e.target.value);
        this.setState({
          role: e.target.value
        });
    };

    formValid(){
        const {user, password, role} = this.state;
        if(!user){
            return this.setState({error: "Enter name*"})
        } else if(!password){
            return this.setState({error: "Enter password*"})
        } else if(!role){
            return this.setState({error: "Select role*"})
        } return true
    }

    handleSubmit = () => {
        const {user, password, role} = this.state;
        if(this.formValid()){
            if(user === "user" || password === "user" ){
                const roleBased= {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
                    "user": this.state.user
                }
                localStorage.setItem("roleBased", JSON.stringify(roleBased))
                localStorage.setItem("role", this.state.role)
                this.setState({
                    loggedIn: true,
                })
                this.props.history.push("/dashboard")
            }    
        } 
    }
    

    render() {
        const {user, password, role} = this.state;
        console.log("user", user, password, role)
        return (
            <div className="login__root">
                <h2>Login</h2>
                <span className="login__root--error">{this.state.error}</span>
                <div>
                    <label>User name(user)</label>
                    <input value={user} onChange={this.handleChange} name="user" type="text" placeholder="user name" />
                </div>
                <div>
                    <label>Password(user)</label>
                <input value={password} onChange={this.handleChange} name="password" type="password" placeholder="password" />
                </div>
                <div>
                    <label>Select role</label>
                    <select onChange={this.handleRoleChange} value={role} >
                        <option>Select role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default Login;
