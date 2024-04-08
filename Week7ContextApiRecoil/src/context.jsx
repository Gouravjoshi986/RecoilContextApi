import { createContext } from "react";
// This returns a react object that has a entry named provider which is used to teleport the state variables around to components without prop drilling. 

// any child that wants to use this context must be wrapped inside a provider.
export const CountContext = createContext(0);