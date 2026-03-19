// useContext = React hook that allows you to share values
//              between multiple level of components without
//              passing props through each level

// Provider Component
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//    <Child/>
//    </MyContext.Provider>

// Consumer Component
// 1. import React, {useContext} from "react";
// 2. import { MyContext} from './ComponentA.jsx';
// 3. const value = useContext(MyContext);

import { useState , createContext} from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA(){

  
  const [user,setUser] = useState("RAI KASHIF ALI");

  return(
    <div className="box">
      <h1>Component A</h1> 
      <p>Hello {user}</p>
      
      <UserContext.Provider value={user}>
      <ComponentB/>   
      </UserContext.Provider>   


      {/* for props  */}
      {/* <ComponentB user={user}/> */}
    </div>   
  );
}
export default ComponentA