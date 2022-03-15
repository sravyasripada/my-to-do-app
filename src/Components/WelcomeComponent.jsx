import React,{Component}from "react";
import {Link} from 'react-router-dom'


class WelcomeComponent extends Component{
    render(){
        return(
            <div>
             <h1>Welcome</h1>
             <span>You can work with your Todos <Link to="/todos">Here </Link></span>
            </div>
           
        )
    }
}
export default WelcomeComponent