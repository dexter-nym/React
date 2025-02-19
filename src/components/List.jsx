function List(props) {
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 52 },
  //     { id: 2, name: "banana", calories: 89 },
  //     { id: 3, name: "orange", calories: 47 },
  //     { id: 4, name: "coconut", calories: 354 },
  //     { id: 5, name: "pineapple", calories: 50 },
  //   ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); // Numeric
  // fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: {item.calories}
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "Category",
  items: [],
};
export default List;
