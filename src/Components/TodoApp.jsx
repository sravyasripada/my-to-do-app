import React,{Component}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToDoListComponent from "./ToDoListComponent";
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import WithNavigation from './WithNavigation.jsx'
import FooterComponent from "./FooterComponent";


class TodoApp extends Component{
    
    render(){
        const LoginComponentWithNavigation = WithNavigation(LoginComponent);
        return(
            <div>
              <BrowserRouter>
              <HeaderComponent/>
                <Routes>
                  <Route Route path="/" element={<LoginComponentWithNavigation />}/>
                  <Route Route path="/login" element={<LoginComponentWithNavigation/>}/>
                  <Route Route path="/welcome" element={<WelcomeComponent/>}/>
                  <Route Route path="/todos" element={<ToDoListComponent/>}/>
                  <Route Route path="*" element={<ErrorComponent/>}/>
                  <Route Route path="/logout" element={<LogoutComponent/>}/>
              </Routes>
              <FooterComponent/>
              </BrowserRouter>
            </div>
           
        )
    }
}
export default TodoApp