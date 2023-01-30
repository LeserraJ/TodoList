import React, {useState, useEffect ,useRef} from "react"
import { render } from "react-dom/cjs/react-dom.production.min"

export default function Counter(){
    const [taskCounter, setTaskCounter]=useState("0")
    const countRef= useRef()
    

    function addTask(){
        (setTaskCounter + 1)
    }
    return(
    <>
        <input ref={countRef} value={taskCounter} onChange={e => setTaskCounter(e.target.value)}></input>
        <div className="border border-top d-flex align-items-center">
            <p>{taskCounter}</p>
        </div>
        <button className="h-25 bg-success text-white" onClick={addTask} >Add Task</button>
    </>

    )
}
