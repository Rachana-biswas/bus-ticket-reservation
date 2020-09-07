import React from "react";
import loginImg from "..//image/logg.jpg";
import { login } from './UserFunctions';
import history from '../history/history'
//import { NameContext } from './registration';



export default class Login extends React.Component {
  //static contextType=NameContext;

  constructor(props) {
    super(props);
    this.state={
      username:"",
      password:""
    }
  }
  handleChangeAll=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
    const user = {
      email: this.state.username,
      password: this.state.password
    }
  
  }
  checkName=()=>{
    console.log(this.state);
    history.push('/buslist')
  }

  render() {
    const x=this.context
    return (
      
      <div className="base-con" ref={this.props.containerRef}>
        <div className="header">login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"  onChange={this.handleChangeAll}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.handleChangeAll} />
            </div>
          </div>
          <div className="footer">
          <button onClick={this.checkName} type="button" className="btn btn-success">
            Login
          </button>
        </div>
        </div>
        
      </div>
      
    );
  }
}

//login(user).then(res => {
  //if (res) {
    //alert("valid");
  //}
//})