import React, {useState} from "react"
import cancelImage from "../../img/cancel.svg"

const AddTask=()=>{
    const [Task, setTask] = useState([]);

    const [Item, setItem] = useState("")

    const[isShown, setIsShown] = useState(false);

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
<div className="d-flex justify-content-center">
<button className="bg-success text-white"onClick={handleClick}>Add Task</button>
</div>


<div className="text-center">
    <div className ="form">
        <input type="text" placeholder="Enter a Task" name="New Task" onChange={handleChangeItem}/>
    </div>


<div>
    <div className="results">
        <ul>
            {Task.map((task,index)=>(
                <div onMouseOver={()=> setIsShown(true)} onMouseLeave={()=>setIsShown(false)} key = {index}>
                    {task.Item}
                     {isShown &&(<img src={cancelImage}  onClick={()=>deleteByIndex(index)}></img>)}
                </div>
            ))}
        </ul>
    </div>
</div>
</div>
</>




    
    
);
}

export default AddTask;