import React,{Component}from "react";

class ToDoListComponent extends Component{
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    description: 'Learn React',
                    done:false,
                    completionDate:new Date() 
                },
                {
                    id: 2,
                    description: 'Learn Spring boot',
                    done:false,
                    completionDate:new Date() 
                }, {
                    id: 3,
                    description: 'Become Full Stack',
                    done:false,
                    completionDate:new Date() 
                }
            ]
        }
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
                        <td>{todo.completionDate.toString()}</td>
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