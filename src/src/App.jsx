import React, { useState } from 'react';
import './App.css'
import UseState from './component/UseState'
import MultipleState from './component/MultipleState'
import UseObject from './component/UseObject'
import UseEffect from './component/UseEffect'
import UseContext from './component/UseContext'
import Task from './mainComponent/Task'

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <>
    {/* <UseState/>
    <MultipleState/>
    <UseObject/>
    <UseEffect/> */}
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <Task/>
      {/* <UseContext/> */}
    </ToggleTheme.Provider> 
    </>
    
  );
}

export default App;