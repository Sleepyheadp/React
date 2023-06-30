import {NavLink} from 'react-router-dom';
import {withRouter} from '../router';
const Home = ()=>{
  return (
    <div>
      <NavLink to='/a'>A</NavLink>
      <NavLink to='/b'>B</NavLink>
      <NavLink to='/c'>C</NavLink>
    </div>
  )
}
export default withRouter(Home);
