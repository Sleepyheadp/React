// import qs from 'qs'
import {Button} from "antd";
const B = (props) => {
	const handleToC = () => {
		// 要跳转到哪个页面就给谁传
		const {navigate} = props;
		// query传参 路径传参
		// navigate('/c/100/capoo')
		// state传参
		navigate('/c', {
			state: {
				id: 1,
				name: 'capoo'
			}
		})
		// 第二种写法
		navigate('/c',{
			replace:true,
			state:{
				id:123,
				name:'Capoo'
			}
		})
		// search传参
		// navigate('/c', {search: qs.stringify({id:1,name:'capoo'})})
		// 第二种写法：
		// navigate({
		// 	pathname: '/c',
		// 	search: qs.stringify({id:1,name:'珠峰'})
		// })
	}
	return <div>
		<div>路由B</div>
		<Button onClick={handleToC}>跳转到C</Button>
	</div>;
};
export default B;
