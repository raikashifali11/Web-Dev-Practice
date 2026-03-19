

function Button(){

  // const handleClick = () => {
  //   console.log('Ouch');
  // }
  // const handleClick2 = (name) => {
    //   console.log(`${name} stop clicking me`);
  // }

  // return(
  //    <button onClick={() => handleClick2("Bro")}>Click me ❤</button>
  // );
  
  const handleClick = (e) => {
    console.log(e);
    e.target.textContent = 'Ouch';
  }
  
  
  return(
     <button onClick={(e) => handleClick(e)}>Click me 😊</button>
  );
}
export default Button