import {useLocation,useParams,useSearchParams} from 'react-router-dom';
const C = () => {
	/*query传参*/
	// console.log('query',useLocation())
	/* search传参 */
	// console.log('search',useParams())
	/* state传参 */
	console.log('state',useLocation().state)
	return <div>我是C组件</div>;
};
export default C;
