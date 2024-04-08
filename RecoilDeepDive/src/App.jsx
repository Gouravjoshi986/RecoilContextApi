import { useRecoilState, useRecoilStateLoadable, useRecoilValue, useSetRecoilState } from 'recoil'
import {networkAtom,jobAtom,notificationAtom,messagingAtom, totalNotificationSelector, notifications} from './atoms'

// function App() {
// // For Hardcoded Values
// // const networkCount = useRecoilValue(networkAtom);
// // const jobCount = useRecoilValue(jobAtom);
// // const notificationCount = useRecoilValue(notificationAtom);
// // const messagingCount = useRecoilValue(messagingAtom);

// // const [networkCount,setNetworkCount] = useRecoilState(notifications)
// const [networkCount] = useRecoilValue(notifications)
// const totalNotificationCount = useRecoilValue(totalNotificationSelector);

// // UNoptimal way of doing ADQ 
// // useEffect(()=>{
// //     axios.get("./")
// //     .then(res=>{
// //       setNetworkCount(res.data)
// //     })
// // }, [])

// return (
//       <>
//         <button>Home</button>
//         <button>My Network {networkCount.network>=100 ? "99+":networkCount.network}</button>
//         <button>Jobs {networkCount.jobs}</button>
//         <button>Messaging {networkCount.messaging}</button>
//         <button>Notifications {networkCount.notification}</button>
//         <button>Me {totalNotificationCount}</button>
//         {/* <button>Home</button>
//         <button>My Network {networkCount>=100 ? "99+":networkCount}</button>
//         <button>Jobs {jobCount}</button>
//         <button>Messaging {messagingCount}</button>
//         <button>Notifications {notificationCount}</button>
//         <button>Me {totalNotificationCount}</button> */}
//       </>
//   )
// }


// export default App

// IF WE WANT TO Make dynamic components (eg todo app) then we use atom family. 
// Atom family returns a function which returns you a new atom / Dynamically create atoms
import {todoAtomFamily} from './atoms'

function App(){
  return (
    <>
      <Todos id={1}/>
      <Todos id={2}/>
    </>
  )
}

function Todos({id}){
  // This is how you call a a specific atom from an atom family 
  // const currentTodo = useRecoilValue(todoAtomFamily(id))
  // Hooks Loadable - > useRecoilStateLoadable and useRecoilValueLoadable are uswed when values are loading and not rendered  
  const currentTodo = useRecoilValueLoadable(todoAtomFamily(id));
  // you can also use state loadable for whole state 
  if(currentTodo.state === "loading"){
    return <div>loading...</div>
  }
  else if(currentTodo.state==="hasValue"){
    return (
      <>
        {currentTodo.contents.title}
        <br/>
        {currentTodo.contents.description}
      </>
    )
  }
  // also has hasError property 
}

export default App