Default App Boilerplate
function App() {
return <></>;
}
export default App;

# This file include React Course codes by Bro Code.

# https://www.youtube.com/watch?v=CgkZ7MvWUAA

# Below Topics are covered

1. Components
2. Card Component
3. External (in index.css), Modules (Button.module.css naming), Inline (object in JS -> style={styles}) CSS
4. Props -> set PropsTypes -> defaultProps
5. Conditional rendering
6. List Rendering
7. Click Event
8. useState() a React Hook other: useEffect, useContext
9. onChange event handler
10. Color Picker App Mini Project
11. Updater function in react.
    In react a function which updates value of an variable is a updater function.
    const [count, setCount] = useState(0)
    function increment(){
    setCount(count + 1) // Pending state, count not updated
    setCount(count + 1) // Pending state, count not updated
    setCount(count + 1) // Pending state, count not updated
    // count updated to 1
    // React put updater function in pending state to calculate NEXT state
    // React do this to increase performance.
    }
    // Correct way of doing it
    function increment(){
    setCount(c => c + 1) or setCount(count => count + 1)
    setCount(c => c + 1) or setCount(count => count + 1)
    setCount(c => c + 1) or setCount(count => count + 1)
    }
    o/p count = 3

12. Update objects