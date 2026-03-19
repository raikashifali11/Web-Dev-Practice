import List from './List.jsx'

function App() {

  const fruits = [{id:1, name:'apple', calories: 35},
                  {id:2, name:'banana', calories: 55},
                  {id:3, name:'mango', calories: 105},
                  {id:4, name:'pineapple', calories: 45},
                  {id:5, name:'dates', calories: 130},]
                
  const vegetables = [{id:6, name:'potatoes', calories: 105},
                      {id:7, name:'celery', calories: 95},
                      {id:8, name:'carrots', calories: 125},
                      {id:9, name:'corn', calories: 85},
                      {id:10, name:'broccoli', calories: 100},]
	return(
		<>
		{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}  
		<List items={vegetables} category="Vegetables" />
		<List/>
		</>
	);
}

export default App
