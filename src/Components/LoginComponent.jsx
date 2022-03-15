import React,{Component}from "react";
import './LoginComponent.css'
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component{

    constructor(){
        super()
            this.state={
                username:'Sravya_S',
                password:'',
                hasLoginfailed: false,
                showSuccessfulMessage:false
            }
        
        this.onChangeHandler=this.onChangeHandler.bind(this)
        this.loginClickHandler=this.loginClickHandler.bind(this)
    }
    onChangeHandler =(e)=>{
    this.setState({[e.target.name] : e.target.value})
}    
loginClickHandler (){
        
    if(this.state.username === "Sravya_S"  && this.state.password === "sravya04"){
        AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        this.props.navigate("/welcome");
        this.setState({ hasLoginfailed : false})
        this.setState({ showSuccessfulMessage:true})
    }else{
        this.setState({ hasLoginfailed:true})
        this.setState({showSuccessfulMessage:false})
    }
}
render(){
        return(
            <div >
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                {this.state.showSuccessfulMessage && <div>Login Successful</div>}
               Username:<input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler}/>
               Password:<input type="password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
               <button className='btn-submit' onClick={this.loginClickHandler}>Login</button>
            </div>
           
        )
    }
}
export default LoginComponent