// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// <component key=value />

import Student from "./Student.jsx";
function App() {

	return(
		<>
      <Student name="Kashif" age={30} isStudent={false}/>
      <Student name="Ali" age={40} isStudent={true}/>
      <Student name="Hammad" age={20} isStudent={true}/>
      <Student/>
		</>
	);
}

export default App
