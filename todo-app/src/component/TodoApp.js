import React, { useState } from "react";
import "./TodoApp.css";



export default function TodoApp() {
    const [toDos,setToDos]=useState([])
    const [ toDo,setToDo] = useState('')
    
  return (
    <div>
    <div className="show-his">
    {toDos.map((obj)=>{
      if(obj.status){
        return(<h1 className="show-text">{obj.text}</h1>)
      }
      return null
    })}
    </div>
      <div className="todoapp-head"><h1>TODO APP</h1></div>
       <div className="todoapp">
     
     
   
      
      <div className="text-alling">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} className="text" type="text" placeholder="Add your todo" />
        <button onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo, status:false}])} className="button">
          
        <i style={{ fontSize: "20px" }} class="fa-solid fa-plus">
          
          </i>
        </button>
      </div>

      <div className="todo">
       { toDos.map((obj) =>{
         return (
           
      <div className="todos">
      <ul>
      
        <li><input onChange={(e)=>{
           console.log(e.target.checked)
           console.log(obj)
           setToDos(toDos.filter(obj2=>{
             if(obj2.id===obj.id){
               obj2.status=e.target.checked
             }
             return obj2
           }))
        }} className="checkbox" value={obj.status} type="checkbox" />  {obj.text} 
        <i class="fa-sharp fa-solid fa-trash"></i>
        </li>
      </ul>
      </div>)
    })}


  

      </div>
          
     
   
    </div>
   
  
    
    
    </div>
    

  );
}




