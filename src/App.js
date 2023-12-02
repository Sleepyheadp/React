import "./App.css";
import {HashRouter} from 'react-router-dom'
import RouterView from "./router/index";
import Home from './components/Home'
function App() {
	return (
		<>
			<HashRouter>
				<Home></Home>
				<RouterView></RouterView>
			</HashRouter>
		</>
	);
}

export default App;
