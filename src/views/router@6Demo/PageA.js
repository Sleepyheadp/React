import {  Outlet } from 'react-router-dom';

const A = function A() {
  return <div>
    <div className="view">
      <Outlet />
    </div>
  </div>
}
export default A;
