import {NavLink} from 'react-router-dom';
import {withRouter} from '../router';
import {Button} from 'antd';
import './home.css'
const Home = ()=>{
  return (
    <div style={{display:'flex'}}>
      <NavLink to='/a'><Button>A</Button></NavLink>
      <NavLink to='/b'><Button>B</Button></NavLink>
      <NavLink to='/c'><Button>C</Button></NavLink>
    </div>
  )
}
export default withRouter(Home);
