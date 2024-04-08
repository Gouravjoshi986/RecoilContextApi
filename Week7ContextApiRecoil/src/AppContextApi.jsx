//  FOR USING CONTEXT API we will first create a file for creating context for a state variable .
// any child that wants to use this context must be wrapped inside a provider.
// after wrapping the child inside provider. use useContext(context name) as a variable value 
// for props that you want to teleport without passing. 

import { useContext, useState } from 'react'
import { CountContext } from './context'

function AppContextApi() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}></Count>
      </CountContext.Provider>
     </div>
  )
}
function Count({setCount}){
  return (
    <div>
      <CountRenderer></CountRenderer>
      <Buttons setCount={setCount}></Buttons>
    </div>
  )
}
function CountRenderer(){
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}
function Buttons({setCount}){
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increase</button>

      <button onClick={()=>{
        setCount(count-1);
      }}>Decrease</button>
    </div>
  )
}

export default AppContextApi

