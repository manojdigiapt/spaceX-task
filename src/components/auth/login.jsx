import React from 'react';
import "./login.scss";
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
            loggedIn
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

    handleSubmit = () => {
        const {user, password, role} = this.state;
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
    

    render() {
        const {user, password, role} = this.state;
        console.log("user", user, password, role)
        return (
            <div className="login__root">
                <h2>Login</h2>
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
