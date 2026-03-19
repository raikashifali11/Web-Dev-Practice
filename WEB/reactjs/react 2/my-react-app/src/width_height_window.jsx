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

function WidthHeight(){
 
  const [width,setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("add event listener")
    
    return () =>{
      window.removeEventListener("resize",handleResize);
      console.log("remove event listener")
      
    }
  },[])

  useEffect(()=>{
    document.title = `Size: ${width} x ${height}`
  })

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
  return(
    <div>
     <p>Width: {width}px</p>
     <p>Height: {height}px</p>
    </div> 
  );
}
export default WidthHeight