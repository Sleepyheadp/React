import {lazy} from 'react';
import {Navigate} from 'react-router-dom';
// pageA => A1/A1/A3
import A from '../views/router@6Demo/PageA';
import aRoutes from './aRoutes';

const routes = [{
  path:'/',
  component:()=><Navigate to='/a' />
},{
  path:'/a',
  name:'a',
  component:A,
  meta:{},
  children:aRoutes
},{
  path:'/b',
  name:'b',
  component:lazy(()=>import('../views/router@6Demo/PageB'))
},{
  path:'/c',
  name:'c',
  component:lazy(()=>import('../views/router@6Demo/PageC'))
},{
  path:'*',
  component:()=> <Navigate to='/a'/>
}]
export default routes;
