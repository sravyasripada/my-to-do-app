import './App.css';
import React,{ Component } from 'react';
import TodoApp from './Components/TodoApp';
import './bootstrap.css'

class App extends Component{
  render(){
    return (
     <div className="App">
        <TodoApp/>
       </div>
      );
  }
  
}

export default App;
