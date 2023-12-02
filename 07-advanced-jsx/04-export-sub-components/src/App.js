import "./App.css";
import Menu from "./components/Menu";

function App() {
  return (
    <Menu>
      <Menu.Item>主页</Menu.Item>
      <Menu.Item>关于</Menu.Item>
      <Menu.Item>联系</Menu.Item>
    </Menu>
  );
}

export default App;
