
import {useContext} from "react";
import { UserContext } from "./ComponentA.jsx";

// function ComponentD(props){
function ComponentD(){
  
  const user = useContext(UserContext);
  return(
    <div className="box">
      <h1>Component D</h1>
      <p>Bye {user}</p>
      {/* <p>Bye {props.user}</p> */}
    </div>   
  );
}
export default ComponentD

// passing props down to component is called props drilling