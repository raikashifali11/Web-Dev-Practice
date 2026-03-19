
import ComponentC from "./ComponentC.jsx";
// function ComponentB(props){
function ComponentB(){
  

  return(
    <div className="box">
      <h1>Component B</h1>
      <ComponentC/>
      {/* <ComponentC user={props.user}/> */}
    </div>   
  );
}
export default ComponentB