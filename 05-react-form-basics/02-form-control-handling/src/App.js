import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hobbies, setHobbies] = useState([]);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRepeatPasswordChange(e) {
    setRepeatPassword(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  function handleOccupationChange(e) {
    setOccupation(e.target.value);
  }

  function handleHobbiesChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  }

  return (
    <main className="container">
      <h1>用户注册</h1>
      <form>
        <label htmlFor="username">用户名</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">密码</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="repeatPassword">重复密码</label>
        <input
          type="password"
          id="repeatPassword"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
        <label htmlFor="gender">性别</label>
        <fieldset id="gender">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          <label htmlFor="male">男</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          <label htmlFor="female">女</label>
        </fieldset>
        <label htmlFor="occupation">职业</label>
        <select
          id="occupation"
          value={occupation}
          onChange={handleOccupationChange}
        >
          <option value="">请选择</option>
          <option value="frontend">前端</option>
          <option value="backend">后端</option>
          <option value="fullstack">全栈</option>
        </select>
        <label htmlFor="hobbies">兴趣</label>
        <fieldset id="hobbies">
          <input
            type="checkbox"
            name="hobby"
            value="programming"
            id="programming"
            onChange={handleHobbiesChange}
            checked={hobbies.includes("programming")}
          />
          <label htmlFor="programming">编程</label>
          <input
            type="checkbox"
            name="hobby"
            value="drawing"
            id="drawing"
            onChange={handleHobbiesChange}
            checked={hobbies.includes("drawing")}
          />
          <label htmlFor="drawing">绘画</label>
          <input
            type="checkbox"
            name="hobby"
            value="music"
            id="music"
            onChange={handleHobbiesChange}
            checked={hobbies.includes("music")}
          />
          <label htmlFor="music">音乐</label>
        </fieldset>
      </form>
      <ul>
        <li>用户名：{username}</li>
        <li>密码：{password}</li>
        <li>重复密码：{repeatPassword}</li>
        <li>性别：{gender}</li>
        <li>职业：{occupation}</li>
        <li>兴趣：{hobbies.join(", ")}</li>
      </ul>
    </main>
  );
}

export default App;
