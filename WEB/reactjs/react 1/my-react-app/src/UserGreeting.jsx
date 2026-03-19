
import PropTypes from 'prop-types'

function UserGreeting(props){

  // if (props.isLoggedIn) {
  //   return <h2>Welcome</h2>
  // }else{
  //   return <h2>Please log in</h2>
  // }
  return(props.isLoggedIn ? <h2>Welcome {props.username}</h2>:
    <h2>Please log in to continue</h2>
  );
}
UserGreeting.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
}
export default UserGreeting