function Button() {
  // function handleClick() {
  //   console.log("Ouch");
  // }

  // function handleClick2(name) {
  //   console.log(`${name} stop clicking me`);
  // }

  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} times`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  return (
    <button className="btn" onClick={() => handleClick("Bro")}>
      Click me
    </button>
  );
}
export default Button;
