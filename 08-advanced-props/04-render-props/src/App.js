import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout nav={<Nav />}>
      <div>
        <h1>欢迎！</h1>
      </div>
    </Layout>
  );
}

function Nav() {
  return (
    <div className="menu">
      <a href="/">首页</a>
      <a href="/product">产品</a>
      <a href="/user">用户</a>
    </div>
  );
}

export default App;
