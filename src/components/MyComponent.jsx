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

// Update array of object in useState hook
// import { useState } from "react";
// function MyComponent() {
//   const [cars, setCars] = useState([]);
//   const [carYear, setCarYear] = useState(new Date().getFullYear());
//   const [carMake, setCarMake] = useState([]);
//   const [carModel, setCarModel] = useState([]);

//   function addCar() {
//     const newCar = { year: carYear, make: carMake, model: carModel };
//     setCars((c) => [...c, newCar]);

//     setCarYear(new Date().getFullYear());
//     setCarMake([]);
//     setCarModel([]);
//   }
//   function removeCar(index) {
//     setCars(cars.filter((_, i) => i !== index));
//   }
//   function yearChange(e) {
//     setCarYear(e.target.value);
//   }
//   function makeChange(e) {
//     setCarMake(e.target.value);
//   }
//   function modelChange(e) {
//     setCarModel(e.target.value);
//   }

//   return (
//     <div className="update-array">
//       <h2>List of car object</h2>
//       <ul>
//         {cars.map((car, index) => (
//           <div key={index} className="items">
//             <li>
//               {car.year} {car.make} {car.model}
//             </li>
//             <button className="btn" onClick={() => removeCar(index)}>
//               Remove
//             </button>
//           </div>
//         ))}
//       </ul>
//       <input type="number" value={carYear} onChange={(e) => yearChange(e)} />
//       <input
//         type="text"
//         value={carMake}
//         onChange={(e) => makeChange(e)}
//         placeholder="Car Maker.."
//       />
//       <input
//         type="text"
//         value={carModel}
//         onChange={(e) => modelChange(e)}
//         placeholder="Car Model.."
//       />
//       <button className="btn" onClick={addCar}>
//         Add Car
//       </button>
//     </div>
//   );
// }
// export default MyComponent;

// useEffect Hook
// import { useState, useEffect } from "react";
// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("White");
//   // runs after every re-render
//   // useEffect(() => {
//   //   document.title = `Count: ${count}`;
//   // });
//   // Runs only on Mount
//   // useEffect(() => {
//   //   document.title = `Count: ${count}`;
//   // }, []);
//   // Runs when Mount + when Value changes
//   useEffect(() => {
//     document.title = `Count: ${count} Color: ${color}`;
//   }, [count]);

//   function addCount() {
//     setCount((c) => c + 1);
//   }
//   function changeColor() {
//     setColor(color === "Brown" ? "White" : "Brown");
//   }

//   return (
//     <>
//       <p style={{ color: color }}>Count: {count}</p>
//       <button onClick={addCount} className="btn">
//         Add
//       </button>
//       <button onClick={changeColor} className="btn">
//         Change Color
//       </button>
//     </>
//   );
// }
// export default MyComponent;

// useEffect Hook 2
// import { useState, useEffect } from "react";
// function MyComponent() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     console.log("Event Listener Added");

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       console.log("Event Listener Removed");
//     };
//   }, []);

//   useEffect(() => {
//     document.title = `${width} X ${height}`;
//   }, [width, height]);

//   function handleResize() {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   }

//   return (
//     <>
//       <p>Window Width: {width}px</p>
//       <p>Window Height: {height}px</p>
//     </>
//   );
// }
// export default MyComponent;

// useRef React Hook
import { useEffect, useRef } from "react";
function MyComponent() {
  const inputRef = useRef(null); // is useState is used for anything the its value keep updating the new component will reload on top
  useEffect(() => {
    console.log("Component Rendered!");
  });
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <button onClick={handleClick} className="btn">
        Click
      </button>
      <input ref={inputRef} />
    </div>
  );
}
export default MyComponent;
