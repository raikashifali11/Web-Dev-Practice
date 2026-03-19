// useEffect(): React Hook that tells react to Do Some code when (pick one):
//              This component re-rendors
//              This component mounts
//              The state of a value changes

// useEffect(function, [dependencies])

// 1. useEffect(() => {})                //Runs after every re-render
// 2. useEffect(() => {}, [])            //Runs only on mount
// 3. useEffect(() => {}, [value])       //Runs on mount + when value changes

// USES
// #1 Event Listener
// #2 DOM manipulation
// #3 Subscriptions (real time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


import  {useState, useEffect} from "react";

function Component(){

  const [count,setCount] = useState(0);
  const [color,setColor] = useState("green");

  useEffect(() => {
      document.title = `count: ${count} ${color}`;
  },[count,color]);

  function AddCount(){
    setCount(c => c+1)
  }
  function RemoveCount(){
    setCount(c => c-1)
  }
  function ChangeColor(){
    setColor(c => c === "green"? "red":"green")
  }

  
  return(
    <div>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={AddCount}>Add</button>
      <button onClick={RemoveCount}>Remove</button>
      <button onClick={ChangeColor}>Change Color</button>
    </div> 
  );
}
export default Component