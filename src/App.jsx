// Components
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Food from "./components/Food";
// function App() {
//   return (
//     <>
//       <Header />
//       <Food />
//       <Footer />
//     </>
//   );
// }
// export default App;

// Card Component
// import Card from "./component/Card";
// function App() {
//   return (
//     <>
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </>
//   );
// }
// export default App;

// 3 Ways to apply CSS
// import Button from "./components/Button";
// function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }
// export default App;

// Props
// import Student from "./components/Student";
// function App() {
//   return (
//     <>
//       <Student name="Spongebob" age={20} isStudent={true} />
//       <Student name="Patrik" age={42} isStudent={false} />
//       <Student name="Squideard" age={50} isStudent={false} />
//       <Student name="Sandy" age={27} isStudent={true} />
//     </>
//   );
// }
// export default App;

// Conditional rendering
import UserGreeting from "./components/UserGreeting";
function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="BroCode" />
    </>
  );
}
export default App;
