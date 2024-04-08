// STATE MANAGEMENT LIBRARY (RECOIL REDUX)
// the problem is when context api is used we expect that the component which is not being operated upon should not re render but the context api doesnt gives us that optimization
// so we use more strict state management tools like recoil 

// SO WE CONCLUDE CONTEXT API IS NOT USED TO MAKE RENDERING MORE PERFORMANT. IT IS USED TO MAKE CODE MORE CLEANER BY AVOIDING PROP DRILLING 

// FOR SOLVING BOTH THE ISSUES WE USE RECOIL : 
// RECOIL was introduced 4 years back and uses the concept of storing all the state in a seperate folder called store from where all the state management is done

// npm i recoil is used to install recoil  
// recoil stores its states in form of Atoms (equivalent of useState hook) and as this atom is outside of the component part we can only use it when needed and this prevents unnecessary re renders

  // In a seperate folder called store -> atoms -> define atoms of state variables like count.jsx .  In this file make atom variables using :
  /* eg :    const countAtom = atom({           //imported atom from recoil 
    key:"countAtom",          //a unique key and a default value is given
    default:0                          // this is how you define an atom
            })
            */  // things in recoil  = RecoilRoot / atom / useRecoilState / useRecoilValue / useSetRecoilState / selector
            // now get rid of all state logic from your components 
            
            // ANYTHING THAT USES RECOIL LOGIC MUST BE WRAPPED INSIDE RecoilRoot just like provider in contextApi 
            
            // useRecoilState is just like use state hook . returns an array with variable and set variable fn     
            // useRecoilValue just gives you the value of the atom and not the updation fn
            // useSetRecoilState gives you the updation fn only 

 // Selectors - if a thing is completely derived / depends on a state then we can use selectors to optimize operation ( its like useMemo )  
 // for defining a selector we need to call selector funcrtion and pass an object with key and a function in a selector file or atom file 

import { countAtom, evenSelector } from "./store/atoms/count";
import { RecoilRoot,useSetRecoilState,useRecoilValue } from 'recoil'            

function AppRecoil (){
  return (
    <div>
        <RecoilRoot>
            <Count></Count>
        </RecoilRoot>
    </div>
  )
}
function Count(){
    return (
        <div>
            <CountRenderer></CountRenderer>
            <Buttons></Buttons>
            <EvenCount></EvenCount>
        </div>
    )
}
function CountRenderer(){
    const count = useRecoilValue(countAtom);
    return (
        <div>
            <b>
                {count}
            </b>
        </div>
    )
}
function Buttons(){
    const setCount = useSetRecoilState(countAtom);
    return (
        <div>
            <button onClick={()=>{
                setCount(count => count+1)
            }}>Increase</button>
            
            <button onClick={()=>{
                setCount(count => count-1)
            }}>Decrease</button>
        </div>
    )
}
function EvenCount(){
    const isEven = useRecoilValue(evenSelector)
    return (
        <div>
        {isEven?<b>Count is Even</b>:null}
        </div>
    )
}
export default AppRecoil