import { Fragment } from "react";
import "./App.css";

function App() {
  const tags = ["React", "Vue", "JavaScript"];

  const heading = (
    <>
      <h1>这是一个用户信息</h1>
      <p>用户信息页面</p>
    </>
  );

  const tagSection = tags.map((tag) => {
    return (
      <Fragment key={tag}>
        <span>{tag}</span>
        <hr />
      </Fragment>
    );
  });

  return (
    <main className="container">
      {heading}
      <User />
      {tagSection}
    </main>
  );
}

function User() {
  return (
    <>
      <p>用户名：张三</p>
      <p>职业：前端工程师</p>
    </>
  );
}

export default App;
