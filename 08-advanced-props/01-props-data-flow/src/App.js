import "./App.css";

function App() {
  return <Parent />;
}

function Parent() {
  return <Child text="Hello, World!" />;
}

function Child(props) {
  // props.text = "Other Text";
  let { text } = props;
  text = "Other Text";
  return <h1>{props.text}</h1>;
}

export default App;
