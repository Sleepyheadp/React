import { Fragment } from "react";
import "./App.css";

function App() {
  const tags = ["React", "Vue", "JavaScript"];

  return (
    <main className="container">
      <User />
      {tags.map((tag) => {
        return (
          <Fragment key={tag}>
            <span>{tag}</span>
            <hr />
          </Fragment>
        );
      })}
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
