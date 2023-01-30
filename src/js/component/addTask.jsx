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
    

console.log(Task);
return(
<>
    <button onClick={handleClick}>Add Task</button>
    <div className ="form">
        <input type="text" placeholder="Enter a Task" name="New Task" onChange={handleChangeItem}/>
    </div>


    <div className="results">
        <ul>
            {Task.map((x,i)=>(
                <li key = {i}>
                    {x.Item}
                </li>
            ))}
        </ul>
    </div>
</>




    
    
);
}

export default AddTask;