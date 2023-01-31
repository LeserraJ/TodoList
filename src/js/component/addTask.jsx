import React, {useState} from "react"


const AddTask=()=>{
    const [Task, setTask] = useState([]);

    const [Item, setItem] = useState("")

    const handleChangeItem = event => {
        setItem(event.target.value)
    };

        const handleClick = event =>{
        setTask([...Task,{Item:Item}])
    };
    
    const deleteByIndex = index =>{
        setTask(oldValues=>{
            return oldValues.filter((x,i)=> i!==index)
        })
    }

console.log(Task);
return(
<>
    <button onClick={handleClick}>Add Task</button>
    <div className ="form">
        <input type="text" placeholder="Enter a Task" name="New Task" onChange={handleChangeItem}/>
    </div>


    <div className="results">
        <ul>
            {Task.map((task,index)=>(
                <li key = {index}>
                    {task.Item}
                    <button onClick={()=>deleteByIndex(index)}>Delete Task</button>
                </li>
            ))}
        </ul>
    </div>
</>




    
    
);
}

export default AddTask;