import React ,{useReducer, useState}from 'react';
import './style.css'
const UseReducer = () =>{
    const initialState = 1;
    const reducer = (state,action) =>{
        if(action.type==="INCR"){
            state= state+1;
        }
        if(state>0 && action.type==="DECR"){
            state = state-1;
        }
        return state;
    }
    // const [myNum,setNum]= useState(val);
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <h2>{state}</h2>
            <div>
                    
                    <button className="btn-grp" onClick={()=>dispatch({type:'INCR'})}>Increment</button>
                   <button className="btn-grp" onClick={()=>dispatch({type:'DECR'})}>Decrement</button>
            </div>
        </>
    )
}

export default UseReducer;