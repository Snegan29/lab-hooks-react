import { useState } from "react";
import "../App.css"


function UseState(){

  const [state, setState] = useState({age:19, siblings:3});

  const handleState = (val)=>{
    setState({
      ...state,[val]:state[val]+1
    })
  }

  const reRenderState = (val)=>{
    setState({
      ...state,
      [val]:state[val]-1
    })
  }
  const {age,siblings} = state;

  return(
    <div>
      <h3>My Current Age is {age}</h3>
      <h4>My siblings {siblings}</h4>
      <button onClick={()=>{handleState("age")}}>Get Older</button>
      <button onClick={()=>{reRenderState("age")}}>Get younger</button>
      <button onClick={()=>{handleState("siblings")}}>more sib</button>
      <button onClick={()=>{reRenderState("siblings")}}>Get eliminated</button>
    </div>
  )

}

export default UseState;