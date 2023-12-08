
import { useContext } from "react";
import { ToggleTheme } from "../App";

function UseContext(){
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

  return(
    <div style={themeStyle}>
      This is made by Kalvium
    </div>
  )
}

export default UseContext;