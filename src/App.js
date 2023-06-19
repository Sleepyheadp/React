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
import {Fragment, lazy, Suspense, useEffect, useReducer, useRef, useState} from "react";
import Menu from "./components/Menu";
import Layout from "./components/Layout";
import BlogPostDetails from "./components/BlogPostDetails";
import Request from "./components/Request";
import UserDataCard from "./components/UserDataCard";
import NoteCount from "components/NoteCount";
import NoteList from "./components/NoteList";
// SVG
// import logo from "./assets/icons/logo.svg";
// 把svg转换成react组件（Vite脚手架不支持这种写法
// import {ReactComponent as Logo } from "./assets/icons/logo.svg";
import Logo from "assets/icons/Logo";
// children 避免嵌套已经props挨个传递的问题（vue-provide/inject)
import Card from "components/Card";
import CardTitle from "components/CardTitle";
import CardContent from "components/CardContent";
import SearchInput from "components/SearchInput";
import Button from "./components/Button";
import useWindowSize from "./hooks/useWindowSize";
import ResponsiveContent from "./components/ResponsiveContent";
import useBreakPoint from "./hooks/useBreakPoint";
import SearchNote from "./components/SearchNote";
import NoteBookList from "./components/NoteLists";
import AddNote from "./components/AddNote";
// 组件懒加载
const LazyContent = lazy(() => delayForDemo(import('./components/LazyLoad/LazyContent')));
// 避免重新渲染
const data = [
	{
		id: 1,
		title: "学习 React",
		content: "这是一篇关于学习 React 的文章",
	},
	{
		id: 2,
		title: "学习 Hook",
		content: "这是一篇关于学习 Hook 的文章",
	},
	{
		id: 3,
		title: "学习 Redux",
		content: "这是一篇关于学习 Redux 的文章",
	},
];
function App() {
	const title = "欢迎使用本应用 🍂";
	const [id,setId] = useState(1)
	function getTitle() {
		return "欢迎使用本应用（函数） 🍂";
	}
	// 处理事件(普通函数书写方式
	// function handleContentInput(e) {
	// 	console.log(e.target.value);
	// }
	// 处理事件(箭头函数书写方式
	// const handleContentInput = (e)=> console.log(e.target.value);
	// 事件传参
	const falseValue1 = false;
	const falseValue2 = null;
	const falseValue3 = undefined;
	const falseValue4= "";
	const falseValue5 = 0;
	const falseValue6 = NaN;

	const [microBlogs,setMicroBlogs] = useState([
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
	]);

	// 内联样式(1、定义一个样式对象，2、在元素中使用style属性
	const hStyle = {
		color: "#000",
		fontSize: "32px",
	}
	// 更新组件状态
	const [count,setCount] = useState(0)
	function increaseCount(){
		setCount(count + 1)
	}
	// 更新数组状态
	const [list,setList] = useState([1,2,3])
	function handleAdd(){
		setList([...list,list.length+1])
	}
	function handlePlusTen(index){
		const newList = [...list];
		newList[index] += 10;
		setList(newList);
	}
	function handleDelete(item){
		setList(list.filter((v)=>v !== item))
	}
	// 更新对象状态
	const [person,setPerson] = useState({
		name:'capoo',
		age:25,
		hobby:'coding',
		// nest:{
		// 	a:1
		// }
	})
	function handleAddObj() {
		setPerson({
			...person,
			gender: "男",
		});
	}
	function handleChangeAge() {
		setPerson({
			...person,
			age: 30,
			// 注意对象嵌套的时候要解构到深一层
			// nest:{
			// 	...person.nest,
			// 	a:2
			// }
		});
	}
	function handleRemoveAge() {
		// 第一种写法
		// const newPerson = {...person};
		// delete newPerson.age;
		// setPerson(newPerson);
		// 第二种写法
		// 从person中解构出age属性，其余属性放到newPerson中
		const { age, ...newPerson } = person;
		setPerson(newPerson);
	}
	// 处理textarea控件的输入
	const [microBlog,setMicroBlog] = useState([])
	// 把输入的内容保存到microBlog中
	function handleChange(e){
		setMicroBlog(e.target.value)
	}
	function handlePublish(){
		const newMicroBlog = {
			id:microBlogs.length+1,
			author:{
				name:'capoo',
				avatar:UserAvatar1,
			},
			content:microBlog,
			publishDate:new Date().toISOString().split('T')[0],
		}
		setMicroBlogs([...microBlogs,newMicroBlog])
		// 发布完内容后清空输入框
		setMicroBlog('')
	}
	// 处理其他控件的输入
	const initialForm = {
		username: "",
		password: "",
		repeatPassword: "",
		gender: "",
		occupation: "",
		hobbies: [],
	}
	const [user, setUser] = useState(initialForm);
	// 循环遍历性别爱好控件
	const gender = [
		{ value: "male", label: "男" },
		{ value: "female", label: "女" },
	];

	const hobbies = [
		{ value: "programming", label: "编程" },
		{ value: "drawing", label: "绘画" },
		{ value: "music", label: "音乐" },
	];

	function handleInputChange(e) {
		let { value, name, type } = e.target;
		if (type === "checkbox") {
			const { checked } = e.target;
			if (checked) {
				value = [...user.hobbies, value];
			} else {
				value = user.hobbies.filter((hobby) => hobby !== value);
			}
		}
		setUser({
			...user,
			[name]: value,
		});
		// 输入的时候进行校验
		const error = rules[name] && rules[name](value);
		setFormErrors({
			...formErrors,
			[name]: error,
		});
	}
	// 表单提交处理事件(作后续的操作

	// 表单验证
	const [formErrors, setFormErrors] = useState({});

	const rules = {
		username: (value) => {
			if (value.length < 3 || value.length > 12) {
				return "用户名必须大于 3 且小于 12 个字符";
			}
		},
		password: (value) => {
			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
				return "密码必须大于 8 个字符，且至少包含一个字母和数字";
			}
		},
	};
	function handleFormSubmit(e) {
		e.preventDefault();
		// console.log(user);
		for (let rule of Object.keys(rules)) {
			const error = rules[rule](user[rule]);
			if (error) {
				setFormErrors({
					...formErrors,
					[rule]: error,
				});
				return;
			}
		}
		console.log(user)
	}

	// 重置表单数据
	function handleFormReset(){
		setUser(initialForm)
	}
	// React组件的副作用
	const [dateTime, setDateTime] = useState(new Date());
	const [refresh,setRefresh] = useState(0)
	// 第二个参数传空数组，意思是仅当前页面加载的时候会执行一次，不依赖其他数据。
	// 如果我们传refresh，则当refresh变化的时候都会执行一次

	// 第一个useEffect的意思是：当页面加载的时候，设置一个定时器，每隔一秒钟更新一次时间
	// 然后清除定时器
	async function updateTime(){
		// 3s后更新时间
		await new Promise((resolve)=>{setTimeout(resolve,3000)})
		setDateTime(new Date())
	}
	useEffect(()=>{
		updateTime();
		// const id = setInterval(()=> {

		// },1000)
		return()=> {
			clearInterval(id)
		}
	},[])

	// useEffect 解决
	const [seconds,setSeconds] = useState(0)
	useEffect(()=>{
		setSeconds((prev) => prev + 1)
		// 影响了后续的useEffect
		// const id = setInterval(()=>{
		// 	// 核心代码，使用箭头函数的形式，在内部对state进行修改
		//
		// },1000)
		console.log('创建了id',id)
		return ()=>{
			console.log('清除了id',id)
			clearInterval(id)
		}
	},[])


	useEffect(() => {
		setDateTime(new Date());
	}, [refresh]);

	// 使用useCallback解决多个useEffect互相影响的问题
	const [city,setCity] = useState('北京')
	const [weather,setWeather] = useState(20)
	function handleCityChange(e){
		setCity(e.target.value)
		// 为什么这里的city取的是上一次修改的值呢？
		// 因为react会把所有的setXXX函数都放到一个队列里面，等到所有的代码执行完毕之后，再统一更新state
		// 所以这里的city还是上一次的值，而不是最新的值
		// setWeather(city === '北京' ? 20 : city === '上海'?25:30)
		// 直接取e.target.value就可以了
		setWeather(e.target.value === '北京' ? 20 : e.target.value === '上海'?25:30)
	}

	// Fragment:循环遍历的情况要添加key属性
	const tags = ['Vue','React','Angular']
	const tagSection = tags.map((item)=>{
		return (
			<Fragment key={item}>
				<div>{item}</div>
			</Fragment>
		)
	})
	// 条件渲染的另一种形式
	const [userCapoo,setUserCapoo] = useState('')
	useEffect(()=>{
		const id = setTimeout(()=>{
			setUserCapoo('Capoo-条件渲染的另一种形式')
		},1000)
		return ()=>{
			// 清理副作用
			clearTimeout(id)
		}
	},[])
	// if(!userCapoo){
	// 	return <div>loading......</div>
	// }
	// React对于props的验证（后续使用ts直接验证
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [blogPost, setBlogPost] = useState({
		title: "React Hooks",
		content: "React Hooks 是 React 16.8 版本新增的特性",
		likes: 10,
		author: {
			name: "张三",
			description: "张三是一名前端工程师",
		},
		tags: ["前端", "React", "教程"],
	});

	function handleLike(likes) {
		setBlogPost({
			...blogPost,
			likes,
		});
	}

	// props透传
	const userData = {
		count:3.22,
		rate:'8.98%'
	}

	// 组件之间state的共享
	const [note,setNote] = useState('')
	// useReducer：集中处理修改状态逻辑
	const [notes,dispatch] = useReducer(notesReducer,[])
	let noteId = 0;
	function notesReducer(notes,action){
		switch(action.type){
			case 'add': {
				return [
					...notes,
					{
						id: action.id,
						note: action.note
					}
				]
			}
			case 'delete':{
				return notes.filter((note)=> note.id !== action.id)
			}
			default :{
				throw Error('没有此action类型')
			}
		}
	}
	function addNote(){
		if(note === ''){
			alert('请输入笔记内容')
		}else{
			dispatch({
				type:'add',
				id:noteId++,
				note
	 		})
			// // 点击完'添加笔记'后，清空输入框的值
			setNote('')
		}
	}
	// 获取到state最新的值
	function handleNoteInput(e){
		setNote(()=>{
			return e.target.value
		})
	}
	function deleteNoteById(id){
		dispatch({
			type:'delete',
			id,
		})
	}
	// 非受控组件
	const childrenValueRef =useRef('')
	const handleQueryPropsChange = (query)=>{
		// 父组件内定义一个方法，接收子组件传递的参数，这样其他父组件中的其他地方也能够使用这个query参数了
		// 「问题」这里获取的值是上一次的值，不是最新的值？怎么解决这个问题呢？使用useRef
		childrenValueRef.current = query
		console.log('子组件的值：',query)
		console.log('父组件的值：',childrenValueRef.current)
	}
	// 自定义hook
	const windowSize = useWindowSize(1000)
	const breakPoint = useBreakPoint(windowSize.width)
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
					onChange={handleChange}
					placeholder="写点什么吧..."
					value={microBlog}
					cols="30"
					rows="5"
					style={{border:'1px solid #ccc'}}
				></textarea>
				<button onClick={handlePublish}>发布</button>
			</div>
			<div className='postList'>
				{/* 1、三元表达式：替代if-else （当然这里的map可以进行判断是否有值，我们只是为了演示三元表达式的实现效果） */}
				{microBlogs.length>0 ? microBlogs.map((microBlog) => (
						// react会自动给帮我们接受并使用key值
						<PostListItem {...microBlog} key={microBlog.id} >
							<EditAndDelete onEdit={(action,e)=>console.log(microBlog.id,action,e.target)}/>
						</PostListItem>
					)):(<div>暂无数据</div>)}
			</div>
			{/*	更新组件状态*/}
			<div>
				<div className="num">{count}</div>
				<button onClick={increaseCount}>增加</button>
			</div>
			{/* 更新数组状态 */}
			<div>
				<ul>
					{list.map((item, index) => (
						<li key={index}>
							{item}
							<button onClick={() => handlePlusTen(index)}>+10</button>
							<button onClick={()=>handleDelete(item)}>删除此项</button>
						</li>
					))}
				</ul>
				<button onClick={handleAdd}>增加</button>
			</div>
			{/*更新对象状态*/}
			<div>
				<ul>
					{Object.keys(person).map((key, index) => (
						<li key={index}>
							{key}: {person[key]}
						</li>
					))}
				</ul>
				<button onClick={handleAddObj}>添加性别</button>
				<button onClick={handleChangeAge}>修改年龄</button>
				<button onClick={handleRemoveAge}>删除年龄</button>
			</div>
			{/* 处理表单控件的输入 input select checkbox radio	*/}
			<h1>用户注册</h1>
			<form className='formUser' onSubmit={handleFormSubmit} onReset={handleFormReset}>
				<label htmlFor="username">用户名</label>
				<input
					type="text"
					id="username"
					name='username'
					value={user.username}
					onChange={handleInputChange}
				/>
				{formErrors.username && (
					<span className="formError">{formErrors.username}</span>
				)}
				<label htmlFor="password">密码</label>
				<input
					name='password'
					type="password"
					id="password"
					value={user.password}
					onChange={handleInputChange}
				/>
				{formErrors.password && (
					<span className="formError">{formErrors.password}</span>
				)}
				<label htmlFor="repeatPassword">重复密码</label>
				<input
					name='repeatPassword'
					type="password"
					id="repeatPassword"
					value={user.repeatPassword}
					onChange={handleInputChange}
				/>
				<label htmlFor="gender">性别</label>
				<fieldset id="gender">
					{gender.map((g) => (
						<Fragment key={g.value}>
							<input
								type="radio"
								id={g.value}
								name="gender"
								value={g.value}
								checked={user.gender === g.value}
								onChange={handleInputChange}
							/>
							<label htmlFor={g.value}>{g.label}</label>
						</Fragment>
					))}
				</fieldset>
				<label htmlFor="occupation">职业</label>
				<select
					id="occupation"
					value={user.occupation}
					onChange={handleInputChange}
					name='occupation'
				>
					<option value="">请选择</option>
					<option value="frontend">前端</option>
					<option value="backend">后端</option>
					<option value="fullstack">全栈</option>
				</select>
				<label htmlFor="hobbies">兴趣</label>
				<fieldset id="hobbies">
					{hobbies.map((hobby) => (
						<Fragment key={hobby.value}>
							<input
								type="checkbox"
								name="hobbies"
								value={hobby.value}
								id={hobby.value}
								onChange={handleInputChange}
								checked={user.hobbies.includes(hobby.value)}
							/>
							<label htmlFor={hobby.value}>{hobby.label}</label>
						</Fragment>
					))}
				</fieldset>
				<button type='submit'>提交</button>
				<button type='reset'>重置</button>
			</form>
			<ul>
				<li>用户名：{user.username}</li>
				<li>密码：{user.password}</li>
				<li>重复密码：{user.repeatPassword}</li>
				<li>性别：{user.gender}</li>
				<li>职业：{user.occupation}</li>
				<li>兴趣：{user.hobbies.join(", ")}</li>
			</ul>
			{/* React组件的副作用	*/}
			<h1>{dateTime.toLocaleString("zh-CN")}</h1>
			{/* useCallback的使用 */}
			<p>{city}天气：{weather}度</p>
			<label htmlFor="weather">选择天气：</label>
			<select onChange={handleCityChange} name="" id="weather">
				<option value="北京">北京</option>
				<option value="上海">上海</option>
				<option value="重庆">重庆</option>
			</select>
			{/* useEffect第二个参数进阶使用 */}
			<h1>{seconds}</h1>
			<button onClick={()=>setRefresh(refresh + 1)}>刷新</button>
			{/*	JSX：Fragment进阶*/}
			{/*不进行循环的时候，可以使用空标签替代Fragment*/}
			<>
				<div>{userCapoo}</div>
				<div>25</div>
			</>
			{/* 循环遍历的时候必须给Fragment标签添加key属性 */}
			{tagSection}
			{/* 导出子组件 */}
			<Menu>
				<Menu.Item>主页</Menu.Item>
				<Menu.Item>关于</Menu.Item>
				<Menu.Item>联系</Menu.Item>
			</Menu>
			{/*	子组件和父组件进行通信 */}
			<Parent />
			{/* JSX/组件作为props传递	*/}
			<Layout nav={<Nav />}>
				<div>
					<h1>欢迎！</h1>
				</div>
			</Layout>
			{/* React对于props的验证	*/}
			<BlogPostDetails
				title={blogPost.title}
				content={blogPost.content}
				likes={blogPost.likes}
				onLike={handleLike}
				author={blogPost.author}
				tags={blogPost.tags}
			/>
			{/* 子传父：利用children进行传值 */}
			<Request>
				{({loading,data})=>{
					if(loading){
						return <div>loading...children</div>
					}
					return <div>{data?.user}</div>
				}}
			</Request>
			{/*	Props透传 */}
			<UserDataCard
				className='yellowFont'
				pClass='redFont'
				message='Hello React'
				userData={userData}
			></UserDataCard>
			{/* 不同组件之间共享状态 */}
			<NoteList onDelete={deleteNoteById} notes={notes}></NoteList>
			<input
				type="text"
				placeholder='输入笔记内容'
				value={note}
				onChange={handleNoteInput}
			/>
			<button onClick={addNote}>添加笔记</button>
			<NoteCount count={notes.length}/>
			{/* 在请求远程数据时避免重新渲染 */}
			<div>
				<PostItem id={id}/>
				<div>
					<button onClick={()=> setId(1)}>1</button>
					<button onClick={()=> setId(2)}>2</button>
					<button onClick={()=> setId(3)}>3</button>
				</div>
			</div>
			{/*	错误处理 */}
			<HandleError/>
			{/* 组件懒加载	*/}
			<LazyComponent/>
			{/* SVG */}
			<>
				{/* <img src={logo} alt="" width={220} /> */}
				{/* <Logo width="500" height="500" fill="#FF0000" /> */}
				<Logo width="100" height="100" fill="#0000FF" />
			</>
			{/* children：避免props多层传递，直接在App.js中引入全部子组件，直接传递props */}
			{/*
          受控组件：内部不进行一些逻辑操作，只进行展示，并且只接收父组件传递的props和方法。
          只是一种对组件的称呼，不是一种组件的类型。
          这里的Card就是一个受控组件。
        */}
			<>
				<Card name='我是父组件'>
					<CardTitle underline>卡片标题</CardTitle>
					<CardContent>卡片内容</CardContent>
				</Card>
			</>
			{/* 非受控组件：子组件内部进行逻辑的处理，父组件进行调用就可以获取到值了 */}
			{/*	受控和非受控组件本质上都是子组件向父组件传递数据的过程，区别在于受控组件不在子组件内部进行逻辑处理，非受控组件则相反 */}
			<SearchInput
				onChange={handleQueryPropsChange}
			/>
			{/*	高阶组件：已被Hooks代替 */}
			<>
				<Button theme='dark'>按钮</Button>
			</>
			{/*	自定义hooks */}
			<>
				<h1>width:{windowSize.width}</h1>
				<h1>height:{windowSize.height}</h1>
				<h1>breakPoint:{breakPoint}</h1>
			</>
			{/* 在不同组件中复用自定义Hooks	*/}
			<ResponsiveContent/>
			{/* 笔记本案例：fetch发送GET请求，添加笔记，搜索笔记，遍历展示笔记 */}
			<NoteBook/>
		</main>
	);
}
// JSX或者函数组件作为参数传递
function Nav(){
	return (
		<div className="menu">
			<a href="/">首页</a>
			<a href="/product">产品</a>
			<a href="/user">用户</a>
		</div>
	)
}
// 子传父（组件通信
function Parent(){
	const [inputValue,setInputValue] = useState('')
	// console.log(inputValue)
	// 修改inputValue
	const handleInputChange = (e)=>{
		setInputValue(e.target.value)
		console.log(e.target.value)
	}
	return <Child inputValue={inputValue} onInputChange={handleInputChange}></Child>
}
function Child(props){
	return (
			<input type="text" value={props.inputValue} onChange={props.onInputChange}/>
	)
}
function EditAndDelete({onEdit}){
	// 子组件自身的方法及逻辑，在里面调用父组件传递过来的方法
	function handleEdit(e){
		e.preventDefault()
		e.stopPropagation() // 父元素有方法执行(点击打印id
		console.log('阻止了a标签的默认跳转...')
		// 先判断是否传递了onEdit方法，如果传递了就执行。不判断直接执行会报错
		if(onEdit){
			onEdit('用户点击了a标签「传给father的值」',e);
		}
	}
	return (
		<div>
			<a onClick={handleEdit} href='https://www.baidu.com'>编辑</a> <a href='https://www.google.com'>删除</a>
		</div>
	)
}
function PostItem({id}){
	const [postItem,setPostItem] = useState({})
	useEffect(()=>{
		let canceled = false
		setTimeout(()=>{
			if(!canceled){
				setPostItem(data[id -1])
			}
		},500)
		return ()=>{
			canceled = true
		}
	},[id])

	return (
		<div>
			<h2>{postItem.title}</h2>
			<p>{postItem.content}</p>
		</div>
	)
}
// 组件内错误处理 404 notfound （一般是定义一个统一的错误处理组件
function HandleError(){
	const [error,setError] = useState(null)
	useEffect(()=>{
		try{
			let responseError;
			responseError = {status: 404, message: 'Not Found'};
			// 主动抛出错误 场景演示
			// throw responseError
			setError(responseError)
		}catch(error){
			setError(error)
		}
	},[])
	if(error){
		return <div>处理组件报错:{error.message}</div>
	}
	return <div>正常情况下显示的内容</div>
}
// 组件懒加载
function LazyComponent(){
	const [showPreview, setShowPreview] = useState(false);
	const [markdown, setMarkdown] = useState('Hello, lazyComponent!');
	return (
		<>
			<textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
			<label>
				<input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
				Show preview
			</label>
			<hr />
			{showPreview && (
				<Suspense fallback={<div>loading...</div>}>
					<h2>Preview</h2>
					<LazyContent markdown={markdown} />
				</Suspense>
			)}
		</>
	);
}
// 添加一个固定的延迟时间，以便你可以看到加载状态
function delayForDemo(promise) {
	return new Promise(resolve => {
		setTimeout(resolve, 2000);
	}).then(() => promise);
}
// fetch，笔记本案例：展示列表，搜索笔记，添加笔记功能
function NoteBook(){
	const [notes, setNotes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [error,setError] = useState(null);

	async function getNotes(params) {
		setLoading(true);
		let url = '/api/notes';
		if(params){
			// url += `?${new URLSearchParams({term:params})}`;
			url += `?term=${params}`;
		}
		const res = await fetch(url);
		if(!res.ok){
			setError(await res.json() )
		}else {
			const data = await res.json();
			setNotes(data);
		}
		setLoading(false);
	}
	useEffect(() => {
		getNotes();
	}, []);
	function handleSearch(event){
		setSearchTerm(event.target.value)
		getNotes(event.target.value)
	}
	async function handleAdd(note){
		const res = await fetch('/api/notes',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(note),
		})
		const data = res.json()
		setNotes([...notes,data])
	}
	return (
		<main className="container">
			<div>
				<h1>我的笔记本</h1>
				<SearchNote notes={notes} searchTerm={searchTerm} onChange={handleSearch} />
				{loading === true ? <p>加载中...</p> : <NoteBookList notes={notes} />}
				{error && <p style={{color: 'red'}}>{error.message}</p>}
				<AddNote onAddNote={handleAdd}/>
			</div>
		</main>
	);
}
export default App;
