import React ,{useState}from 'react';
import './style.css'
const UseState = () =>{
    const val = 1;
    const [myNum,setNum]= useState(val);
    return(
        <>
            <h2>{myNum}</h2>
            <div>
                    
                    <button className="btn-grp" onClick={()=>setNum(myNum+1)}>Increment</button>
                   <button className="btn-grp" onClick={()=>myNum>0? setNum(myNum-1) : setNum(0)}>Decrement</button>
            </div>
        </>
    )
}

export default UseState;