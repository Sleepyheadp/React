/*
* 1、首先定义样式的文件
* 2、引入样式文件
* 3、使用样式（className对应文件中的className
* */
import "./App.css";
// 导入图片
import UserAvatar1  from './assets/images/user1.png';
import UserAvatar2  from './assets/images/user2.png';
import UserAvatar3  from './assets/images/user3.png';
import PostListItem from "./components/PostListItem";
function App() {
	const title = "欢迎使用本应用 🍂";

	function getTitle() {
		return "欢迎使用本应用（函数） 🍂";
	}

	// 处理事件(普通函数书写方式
	function handleContentInput(e) {
		console.log(e.target.value);
	}
	// 处理事件(箭头函数书写方式
	// const handleContentInput = (e)=> console.log(e.target.value);
	// 事件传参


	const falseValue1 = false;
	const falseValue2 = null;
	const falseValue3 = undefined;
	const falseValue4= "";
	const falseValue5 = 0;
	const falseValue6 = NaN;

	const microBlogs = [
		{
			id: 1,
			author: {
				name: "张小丰",
				avatar: UserAvatar1,
			},
			content:
				"这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
			publishDate: "2022-10-25",
		},
		{
			id: 2,
			author: {
				name: "王小玲",
				avatar: UserAvatar2,
			},
			content:
				"这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
			publishDate: "2022-10-25",
		},
		{
			id: 3,
			author: {
				name: "李小明",
				avatar: UserAvatar3,
			},
			content:
				"这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
			publishDate: "2022-10-25",
		},
	];

	// 内联样式(1、定义一个样式对象，2、在元素中使用style属性
	const hStyle = {
		color: "#000",
		fontSize: "32px",
	}

	return (
		<main
			className="container"
			style={{border:'1px solid green'}}
		>
			<h1
				style={hStyle}
			>
				{/*只有0和NaN能正常渲染出来*/}
				「{falseValue1}」、
				「{falseValue2}」、
				「{falseValue3}」、
				「{falseValue4}」、
				「{falseValue5}」、
				「{falseValue6}」、
				hello React!
				{title}
				{getTitle()}
			</h1>
			<div className='publishBlog'>
				<textarea
					onInput={handleContentInput}
					placeholder="写点什么吧..."
					cols="30"
					rows="5"
				></textarea>
				<button>发布</button>
			</div>
			<div className='postList'>
				{/* 1、三元表达式：替代if-else （当然这里的map可以进行判断是否有值，我们只是为了演示三元表达式的实现效果） */}
				{microBlogs.length>0 ? microBlogs.map((microBlog) => (
					// reacr会自动给帮我们接受并使用key值
					<PostListItem microBlog={microBlog} code='0-9-2战犯出列' key={microBlog.id} />
				)):(<div>暂无数据</div>)}
			</div>
		</main>
	);
}

export default App;
