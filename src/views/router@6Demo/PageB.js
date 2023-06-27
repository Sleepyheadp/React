// C组件的路由地址
// <Route path="/c/:id?/:name?" element={<C />} />

/* 跳转及传参 */
import { useNavigate } from 'react-router-dom';
const B = function B() {
  const navigate = useNavigate();
  return <div className="box">
    B组件的内容
    <button onClick={() => {
      navigate('/c');
      navigate('/c', { replace: true });
      navigate(-1);
      navigate({
        pathname: '/c/100/zxt',
        search: 'id=10&name=zhufeng'
      });
      navigate('/c', { state: { x: 10, y: 20 } });
    }}>按钮</button>
  </div>
}
export default B;
