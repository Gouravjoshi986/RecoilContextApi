import { atom, selector, atomFamily, selectorFamily} from "recoil";
// For Asynchronous Calls - fetching from backend  
// THIs IS THE BAD WAY OF DOING THIS AS IT RERENDERS default 0 first then fills it 
// export const notifications = atom({
//     key:"networkAtom",
//     default: {
//         network:0,
//         job:0,
//         messaging:0,
//         notification:0
//     }
// })

// OPTIMAL WAY OF DOING ASYNCHRONOUS DATA QUERRIES
// export const notifications = atom({
//     key:"networkAtom",
//     default: selector({
//         key:"networkAtomSelector",
//         get: async () => {
//                 const res = await axios.get("./")
//                 return res.data
//         }       
//     })
// })

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get: ({get})=>{
//         const totalNotificationCount = get(notifications)
//         return totalNotificationCount.network + totalNotificationCount.jobs + totalNotificationCount.notification + totalNotificationCount.messaging 
//     }
// })


// For HARDCODED VALUES
// export const networkAtom = atom({
//     key:"networkAtom",
//     default:104
// })
// export const jobAtom = atom({
//     key:"jobAtom",
//     default:0
// })
// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// })
// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// })

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get: ({get})=>{
//         const networkCount = get(networkAtom)
//         const jobCount = get(jobAtom)
//         const notificationCount = get(notificationAtom)
//         const messagingCount = get(messagingAtom)
//         return networkCount + jobCount + notificationCount + messagingCount
//     }
// })

import { todos } from "./todos";
// FOR TODO APP  
// export const todoAtomFamily = atomFamily({
//     key:"todoAtomFamily",
//     default: id => {
//         return todos.find(x => x.id==id)
//     },
// })  

// Selector Family - > When you want to fetch data for dynamic atoms from a server
// dynamic default values for differant atoms of a family differed by id
export const todoAtomFamily = atomFamily({
        key:"todoAtomFamily",
        default: selectorFamily({
            key:"todoSelectorFamily",
            get:(id)=>async ({get})=>{
                const res = await axios.get(`./?id=${id}`);
                return res.data.todos
            },
        })
});

// Hooks Loadable - > useRecoilStateLoadable and useRecoilValueLoadable are uswed when values are loading and not rendered  