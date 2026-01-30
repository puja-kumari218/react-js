import "./index.css";
import Card from "./components/Card.jsx";

function App() {
  let myObject = {
    name: "puja",
  age: 22,
  };
  let myArray = [1,2,3,4,5];
  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-xl">Tailwind text</h1>
      <Card name="puja" btnText="Click me" />
            <Card name="kumari" />

    </>
  );
}

export default App;
