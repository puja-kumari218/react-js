import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  const addValue = () => {
    console.log("clicked", count);
    setCount(count + 1);
  };

  const removeValue = () => {
    setCount(count - 1);
        console.log("clicked", count);

  }
  return (
    <>
      <h1>hii this side puja</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick={removeValue}>Remove value {count}</button>
    </>
  );
}

export default App;
