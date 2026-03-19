

function Button(){

  // Inline Styling
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    margin: "10px",
  }


  return(
     <button style={styles}>Click me</button>
  );
}
export default Button