import {lazy} from 'react';
import {Navigate} from 'react-router-dom';
const aRoutes = [{
  path:'/a',
  component:()=> <Navigate to='/a/a1'/>
},{
  path:'/a/a1',
  name:'a-a1',
  component:lazy(()=>import('../views/router@6Demo/A/A1')),
  meta:{}
},{
  path:'/a/a2',
  name:'a-a2',
  component:lazy(()=>import('../views/router@6Demo/A/A2')),
  meta:{}
},{
  path:'/a/a3',
  name:'a-a3',
  component:lazy(()=>import('../views/router@6Demo/A/A3')),
  meta:{}
}]
export default aRoutes;
