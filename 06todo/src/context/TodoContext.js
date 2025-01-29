import { useContext,createContext } from "react";
export const TodoContext = createContext({
    //todos:[{},{},{}]
    // property define
    todos:[
        {   id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    // only functionality name
    addTodo :(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

// make a  custom hooks
export const useTodo = ()=>{ 
    return useContext (TodoContext)
}
 export const TodoProvider =  TodoContext.Provider