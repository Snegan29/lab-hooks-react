
import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){
    const initialValue = 0
    const [like,setLike]=useState(initialValue)
    const [para, setPara] = useState(false)
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"red",
    color:theme?"red":"black",
    fontSize:"1.5rem",
    fontWeight:"600",
    padding:"2rem",
    margin:"2rem",
    fontFamily:"Arial"
  }

  const increaseLike =()=>{
    setLike(like+1)
  }

  const reduceLike=()=>{
    setLike(like-1)
  }
  const resetLike = ()=>{
    setLike(initialValue)
  }

  useEffect(() => {
    if (!para) {
      alert('Paragraph is closing.');
    } else {
      alert('Paragraph will be visible.');
    }
  }, [para]);

  const showPara = () => {
    setPara(!para);
  };

  return(
    <div style={themeStyle}>
        {para && <p>This is made by Kalvium</p>}
       <button onClick={showPara}>
        {para ? "Hide para":"Show Para"}
       </button>
       
        <p>{like}</p>
        <button onClick={increaseLike}>Like</button>
        <button onClick={reduceLike}>Dislike</button>
        <button onClick={resetLike}>Reset Likes</button>
    </div>
  )
}

export default UseContext;