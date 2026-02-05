import { useState } from "react";

function App() {
  const [count, setCount] = useState();

  const updateValue = (value) => {
    if (value > 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h2>Counter value: {count}</h2>

      <button onClick={() => updateValue(1)}>
        Add Value
      </button>

      <button onClick={() => updateValue(-1)}>
        Remove Value
      </button>
    </>
  );
}

export default App;
