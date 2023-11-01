import './App.css';
import {Button} from 'antd';
import {Link,HashRouter} from 'react-router-dom';
import routes from './router/routes';
import RouterView from './router/index';
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Link to='/'><Button>基础语法</Button></Link>
        <Link to='/compdevbasic'><Button>组件化开发基础</Button></Link>
        <Link to='/hooks'><Button>ReactHooks</Button></Link>
      </div>
      <div className="content">
        <RouterView routes={routes}></RouterView>
      </div>
    </HashRouter>
  );
}

export default App;
