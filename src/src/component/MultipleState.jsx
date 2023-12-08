import { useState } from "react";
import "../App.css"

function UseState(){
  const [currAge,setAge] = useState(1);
  const [currSib, setSib] = useState(3);
  
  const handleAge = ()=>{
    setAge(currAge+1);
  }

  const getYounger = ()=>{
    setAge((prevAge)=>prevAge-1)
  }

  const handleSib = ()=>{
    setSib(currSib+1);
  }
  const eliminateSib = ()=>{
    setSib((prevSib)=>prevSib-1);
  }


  return (
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      <button onClick={handleAge}>Get Older</button>
      <button onClick={getYounger}>Get Younger</button>
      <button onClick={handleSib}>Get more Sib</button>
      <button onClick={eliminateSib}>get eliminated</button>
    </div>
  );
}

export default UseState;
