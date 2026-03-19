
import ComponentD from "./ComponentD.jsx";
import {useContext} from "react";
import { UserContext } from "./ComponentA.jsx";

// function ComponentC(props){
function ComponentC(){
  
  const user = useContext(UserContext);


  return(
    <div className="box">
      <h1>Component C</h1>
      <p>Hello here {user}</p>
      <ComponentD/>
      {/* <ComponentD user={props.user}/> */}
    </div>   
  );
}
export default ComponentC