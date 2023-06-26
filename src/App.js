import React from "react";
import Vote from "./views/Vote";
import store from './store'
const App = function App() {
  return (
    <div>
      <Provider
        value={{store}}
      >
        <Vote />
      </Provider>
    </div>
  )
};
export default App;
