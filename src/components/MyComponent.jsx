// useState hook in React
// import React, { useState } from "react";
// function MyComponent() {
//   const [name, setName] = useState("Guests");
//   const [age, setAge] = useState(0);
//   const [isEmploy, setIsEmploy] = useState(false);

//   const updateName = () => {
//     setName("Spongebob");
//   };
//   const updateAge = () => {
//     setAge(age + 1);
//   };
//   const updateEmployment = () => {
//     // isEmploy ? setIsEmploy(false) : setIsEmploy(true);
//     setIsEmploy(!isEmploy);
//   };
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <button onClick={updateName} className="btn">
//         Set Name
//       </button>
//       <p>Age: {age}</p>
//       <button onClick={updateAge} className="btn">
//         Increment Age
//       </button>
//       <p>Employed: {isEmploy ? "Yes" : "No"}</p>
//       <button onClick={updateEmployment} className="btn">
//         Change Employment
//       </button>
//     </div>
//   );
// }
// export default MyComponent;

// onChange Event handler
// import { useState } from "react";
// function MyComponent() {
//   const [name, setName] = useState("Guest");
//   function nameChange(e) {
//     setName(e.target.value);
//   }
//   return (
//     <div>
//       <input type="text" value={name} onChange={(e) => nameChange(e)} />
//       <p>Name: {name}</p>
//     </div>
//   );
// }
// export default MyComponent;

// Update Objects
// import { useState } from "react";
// function MyComponent() {
//   const [car, setCar] = useState({
//     year: 2024,
//     make: "Ford",
//     model: "Mustang",
//   });
//   const changeYear = (e) => {
//     setCar((c) => ({ ...c, year: e.target.value }));
//   };
//   const changeMake = (e) => {
//     setCar((c) => ({ ...c, make: e.target.value }));
//   };
//   const changeModel = (e) => {
//     setCar((c) => ({ ...c, model: e.target.value }));
//   };
//   return (
//     <div className="update-object">
//       <p>
//         Your favorite car is: {car.year} {car.make} {car.model}
//       </p>
//       <input
//         type="number"
//         value={car.year}
//         onChange={(e) => {
//           changeYear(e);
//         }}
//       />
//       <input
//         type="text"
//         value={car.make}
//         onChange={(e) => {
//           changeMake(e);
//         }}
//       />
//       <input
//         type="text"
//         value={car.model}
//         onChange={(e) => {
//           changeModel(e);
//         }}
//       />
//     </div>
//   );
// }
// export default MyComponent;

// Update Arrays
// import { useState } from "react";
// function MyComponent() {
//   const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);
//   const addFood = () => {
//     const food = document.getElementById("foodInput").value;
//     setFoods((f) => [...f, food]);
//     document.getElementById("foodInput").value = "";
//   };
//   const removeFood = (index) => {
//     setFoods(foods.filter((_, i) => i !== index));
//   };
//   return (
//     <div className="update-array">
//       <h2>Lists of Food</h2>
//       <ul>
//         {foods.map((fruit, index) => (
//           <div key={index} className="food-items">
//             <li>{fruit}</li>
//             <button onClick={() => removeFood(index)} className="btn">
//               Remove
//             </button>
//           </div>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           id="foodInput"
//           placeholder="Food name goes here.."
//           required
//         />
//         <button onClick={addFood} className="btn">
//           Add food
//         </button>
//       </div>
//     </div>
//   );
// }
// export default MyComponent;
