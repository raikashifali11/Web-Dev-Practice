
import PropTypes from 'prop-types'


function List(props){

  // const fruits = ['apple','banana','orange','mango','pineapple'];
  // const fruits = [{id:1, name:'banana', calories: 95},
  //                 {id:2, name:'apple', calories: 35},
  //                 {id:3, name:'orange', calories: 105},
  //                 {id:4, name:'mango', calories: 45},
  //                 {id:5, name:'pineapple', calories: 120},]

  // fruits.sort((a,b) => a.name.localeCompare(b.name)) //Alphabetical
  // fruits.sort((a,b) => b.name.localeCompare(a.name)) //Reverse Alphabetical
  // fruits.sort((a,b) => a.calories - b.calories) //Numeric
  // fruits.sort((a,b) => b.calories - a.calories) //Reverse Numeric

  // const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories>=100);

  // const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);
  // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>
  // );
  // const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>{lowCalFruits.name}: &nbsp; {lowCalFruits.calories}</li>
  // );
  // return(<ol>{listItems}</ol>);
  
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>
  );
  return(<>
  <h3>{category}</h3>
  <ol>{listItems}</ol>
  </>);
  
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number,
  })),
}
List.defaultProps = {
  items: [],
  category: 'Category',
}
export default List