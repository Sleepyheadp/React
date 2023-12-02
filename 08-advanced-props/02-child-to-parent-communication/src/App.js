import { useState } from "react";
import "./App.css";

function App() {
  return <Parent />;
}

function Parent() {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return <Child inputValue={inputValue} onInputChange={handleInputChange} />;
}

function Child(props) {
  return (
    <input
      type="text"
      value={props.inputValue}
      onChange={props.onInputChange}
    />
  );
}

export default App;
