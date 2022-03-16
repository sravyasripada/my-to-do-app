import React,{Component}from "react";
import ToDoDataService from "./ToDoDataService";

class ToDoListComponent extends Component{
    constructor() {
        super();
        this.state = {
            todos: [] 
        }
    }
    componentDidMount(){
        ToDoDataService.retriveAllTodos()
        .then(response =>{
            this.setState({ todos:response.data})
        })
    }
    render(){
        return(
            <div>
              <h1>ToDo's</h1>
               <table className='table'>
                <thead>
                  <tr>
                   <th>Description</th>
                   <th>Done</th>
                   <th>Completion Date</th>
                  </tr>
               </thead>
               <tbody>
                   { this.state.todos.map(
                       todo =>
                        <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td>{todo.done.toString()}</td>
                        <td>{todo.targetDate.toString()}</td>
                       </tr>
                   )
                   
                   }                   
               </tbody>
            </table>
        </div>
           
        )
    }
}
export default ToDoListComponent