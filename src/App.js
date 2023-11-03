import './App.css';
import {Button} from 'antd';
import {NavLink,HashRouter} from 'react-router-dom';
// router5.x版本
// import RouterView from './router/routerFive';
// import routes from './router/routerFive/routes';
//router6.x版本
import RouterView from './router/routerSix';
// 普通匹配路由写法
// import {Switch,Route,Redirect} from 'react-router-dom';
// import BasicGrammar from './views/ReactBasicGrammar';
// import CompDevBasic from './views/ReactCompDevBasic';
// import Hooks from './views/ReactHooks';
// import User from './views/User';
// import Login from "./views/Login";
function App() {
  return (
    <div className='App'>
      <HashRouter>
        <div className='nav'>
          <NavLink to='/'><Button>基础语法</Button></NavLink>
          <NavLink to='/compdevbasic'><Button>组件化开发基础</Button></NavLink>
          <NavLink to='/hooks'><Button>ReactHooks</Button></NavLink>
          {/*<NavLink to='/user'><Button>UserRouterFive</Button></NavLink>*/}
          <NavLink to='/user'><Button>UserRouterSix</Button></NavLink>
        </div>
        <RouterView></RouterView>
        {/*<div className="routerFive">
            <div className="content">
              我们对routes进行了统一的处理
              <RouterView routes={routes}></RouterView>
               普通写法:这种写法连路由表（router/routes）都不需要配置，直接在这里匹配
               <Switch>
                1、精准匹配到根目录后自动跳转到basicgrammer
                 /和*的区别：/是精确匹配，*是模糊匹配， to='/'是匹配根目录，to='*'是匹配所有
                <Redirect exact from='/' to='/basicgrammer'></Redirect>
                2、匹配页面路由
                <Route path='/basicgrammer' exact component={BasicGrammar}></Route>
                <Route path='/compdevbasic' component={CompDevBasic}></Route>
                <Route path='/hooks' component={Hooks}></Route>
                 render是一个函数，返回值是一个组件
                <Route path='/user' render={(
                    ()=>{
                        // 当路由地址匹配后，先把render函数执行，返回值就是我们需要渲染的内容
                        // 在此函数中，可以处理一些事情，例如登录态校验
                        const isLogin = true;
                        if(!isLogin){
                            return <User />
                        }
                        return <Login/>
                    }
                )} />
                3、匹配404页面
                  404页面的匹配必须放在最后，因为匹配到404页面后，就不会再往下匹配了
                <Redirect to='/notfound' />
              </Switch>
            </div>
          </div>*/}
      </HashRouter>
    </div>
  );
}

export default App;
