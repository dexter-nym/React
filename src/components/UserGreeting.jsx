// if/else Conditional rendering
// import PropTypes from "prop-types";
// function UserGreeting(props) {
//   if (props.isLoggedIn === true) {
//     return <h2>Welcome {props.username}</h2>;
//   }
//   return <h2>Please Login</h2>;
// }
// UserGreeting.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   username: PropTypes.string,
// };
// UserGreeting.defaultProps = {
//   isLoggedIn: false,
//   username: "Guest",
// };
// export default UserGreeting;

// Ternary operator Conditional rendering
import PropTypes from "prop-types";
function UserGreeting(props) {
  const Greet = <h2>Welcome {props.username}</h2>;
  const Notify = <h2>Please Login</h2>;

  return props.isLoggedIn ? Greet : Notify;
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
export default UserGreeting;
