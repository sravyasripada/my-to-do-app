import axios from 'axios'

class ToDoDataService{

    retriveAllTodos(){
        return axios.get('http://localhost:8081/todos')
    }
}
export default new ToDoDataService;