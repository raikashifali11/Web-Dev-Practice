// import styles from './Button.module.css'

function Button(){

  // Inline Styling
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  }


  return(
     <button className={styles}>Click me</button>
  );
}
export default Button