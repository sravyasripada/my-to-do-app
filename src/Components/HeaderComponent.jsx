import React,{Component} from "react";
import {Link} from "react-router-dom"
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component{
     render(){
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
         return(
             <header>
                 <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                 <div><a href="https://ethames.ac.in/" className='navbar-brand'>Ethames_CTH</a></div>
                    <ul className='navbar nav'>
                      {isUserLoggedIn &&<li className='nav-link'><Link to ="/welcome">Home</Link></li>}
                      {isUserLoggedIn &&<li className='nav-link'><Link to ="/todos">Todos</Link></li>}
                    </ul> 
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                       {!isUserLoggedIn && <li className='nav-link'><Link to ="/login">Login</Link></li>}
                       {isUserLoggedIn && <li className='nav-link'><Link to ="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                 </nav>
             </header>
         )
     }
}
export default HeaderComponent