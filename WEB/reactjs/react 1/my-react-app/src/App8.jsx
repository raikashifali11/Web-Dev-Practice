// React hook = Special function that allows functional components 
//              to use React features without writing class components 
//              (useState, useEffect, useContext, useReducer, useCallback, ...)

// UseState = A React hook that allows the creation of a special variable 
//            AND a setter function to update its value in the virtual DOM.App
//            [name, setName]

import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App() {

	return(
		<>
      <MyComponent/>
			<Counter/>			
		</>
	);
}

export default App
