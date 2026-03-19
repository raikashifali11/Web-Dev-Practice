// useState = Re-renders the component when the state value changes.

// useRef = "use Reference" Does not cause re-renders when its value changes.
//           When you want a component to remember some information,
//           but you don't want that information to triggger new renders.

//           1. Accessing/Interacting with DOM elements
//           2. Handling Focus, Animation, and transitions
//           3. Manging Timers and Intervals

import  {useEffect,useRef} from "react";

function Component(){

//  const [number,setNumber] = useState(0);
// const ref = useRef(0);
const InputRef1 = useRef(null);
const InputRef2 = useRef(null);
const InputRef3 = useRef(null);

 useEffect(()=>{
  console.log("Component rendered")
})

 function handleClick1(){
  // setNumber(n => n+1);
  // ref.current = ref.current + 1; 
  // ref.current++;
  // console.log(ref.current);
  InputRef1.current.focus();
  InputRef1.current.style.backgroundColor = "yellow";
  InputRef2.current.style.backgroundColor = "";
  InputRef3.current.style.backgroundColor = "";
}
function handleClick2(){
  
  InputRef2.current.focus();
  InputRef1.current.style.backgroundColor = "";
  InputRef2.current.style.backgroundColor = "yellow";
  InputRef3.current.style.backgroundColor = "";
}
function handleClick3(){
  
  InputRef3.current.focus();
  InputRef1.current.style.backgroundColor = "";
  InputRef2.current.style.backgroundColor = "";
  InputRef3.current.style.backgroundColor = "yellow";
 }

  return(
    <div>
      <button onClick={handleClick1}>Click me 1</button>
      <input type="text" ref={InputRef1}/><br />
      
      <button onClick={handleClick2}>Click me 2</button>
      <input type="text" ref={InputRef2}/><br />
      
      <button onClick={handleClick3}>Click me 3</button>
      <input type="text" ref={InputRef3}/><br />
      
    </div> 
  );
}
export default Component