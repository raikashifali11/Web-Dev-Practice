import  {useState, useEffect} from "react";

function DigitalClock(){
 
  const [time,setTime] = useState(new Date());
  
  useEffect(()=>{
    const IntervalId = setInterval(() => {
      setTime(new Date);
    }, 1000);

    return () => {
      clearInterval(IntervalId);
    }

  },[]);

  function FormatTime(){
    
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)} ${meridiem}`
  }

  function PadZero(number){
    return (number < 10 ? "0" : "") + number;
  }

  return(
    <div>
      <span>{FormatTime()}</span>
    </div>   
  );
}
export default DigitalClock