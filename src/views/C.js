import {useLocation,useParams} from 'react-router-dom';
const C = () => {
	/*query传参*/
	console.log('query',useLocation())
	/* search传参 */
	console.log('search',useParams())
	/* state传参 */
	console.log('state',useLocation().state)
	let {id,name} = useLocation().state || {};
	return (
		<>
			<div>路由C</div>
			<div>B路由传递过来的：{id},{name}</div>
		</>
	)
};
export default C;
