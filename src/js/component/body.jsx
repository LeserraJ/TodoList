import React, {useState} from "react"

const Body =()=>{
    const [todo,setTodo] = useState([]);
    const [counter,setCounter] =useState("0");
    
    
   
    
    
    
    return(
        <div className="d-flex justify-content-center">
            <div className="border border-secondary w-25 h-25 text-justify">
                <form className="border-0"> 
                    <input className ="border-0 w-100 p-3" type="text"></input> 
                </form>
                <div className="border border-top d-flex align-items-center">
                    <p className="">{counter} item left</p>
                </div>
            </div>
            
        </div>        
    )
}

export default Body;