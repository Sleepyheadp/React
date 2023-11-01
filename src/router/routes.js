import {lazy} from 'react';
const routes = [
  {
    redirect:true,
    from:'/',
    to:'/basicgrammer',
    exact:true,
  },
  {
    path:'/basicgrammer',
    name:'BasicGrammer',
    component:lazy(()=>import('../views/ReactBasicGrammar'))
  },
  {
    path:'/compdevbasic',
    name:'CompDevBasic',
    component:lazy(()=>import('../views/ReactCompDevBasic'))
  },
  {
    path:'/hooks',
    name:'Hooks',
    component:lazy(()=>import('../views/ReactHooks'))
  },
  {
    path:'*',
    component:lazy(()=>import('../views/ReactBasicGrammar'))
  }
]
export default routes;
