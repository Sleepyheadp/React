import './App.css';
import {ReactBasicGrammar} from "./views/ReactBasicGrammar";
import {ReactCompDevBasic} from "./views/ReactCompDevBasic";
import {ReactHooks} from './views/ReactHooks';
function App() {
  return (
    <div className="App">
      <ReactBasicGrammar></ReactBasicGrammar>
      <ReactCompDevBasic></ReactCompDevBasic>
      <ReactHooks></ReactHooks>
    </div>
  );
}

export default App;
