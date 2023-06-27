/* 接收信息 */
import { useParams, useSearchParams, useLocation, useMatch } from 'react-router-dom';
const C = function C() {
  //获取路径参数信息
  let params = useParams();
  console.log('useParams:', params);

  //获取问号传参信息
  let [search] = useSearchParams();
  search = search.toString();
  console.log('useSearchParams:', search);

  //获取location信息「pathname/serach/state...」
  let location = useLocation();
  console.log('useLocation:', location);

  //获取match信息
  console.log('useMatch:', useMatch(location.pathname));

  return <div className="box">
    C组件的内容
  </div>
}
export default C;
