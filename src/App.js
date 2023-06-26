import React from "react";
import Vote from "./views/Vote";
import ThemeContext from './utils/ThemeContext';
import store from './store'
const App = function App() {
  return (
    <div>
      <ThemeContext.Provider
        value={{store}}
      >
        <Vote />
      </ThemeContext.Provider>
    </div>
  )
};
export default App;
