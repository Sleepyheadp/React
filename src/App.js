import "./App.css";

function App() {
	const title = "欢迎使用本应用 🍂";

	function getTitle() {
		return "欢迎使用本应用（函数） 🍂";
	}

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
				avatar: "",
			},
			content:
				"这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
			publishDate: "2022-10-25",
		},
		{
			id: 2,
			author: {
				name: "王小玲",
				avatar: "",
			},
			content:
				"这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
			publishDate: "2022-10-25",
		},
		{
			id: 3,
			author: {
				name: "李小明",
				avatar: "",
			},
			content:
				"这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？",
			publishDate: "2022-10-25",
		},
	];

	return (
		<main className="container">
			<h1
				style={{
					color: "pink",
					fontSize: "32px",
				}}
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
			<div>
				<textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
				<button>发布</button>
			</div>
			<div>

				{/* 1、三元表达式：替代if-else （当然这里的map可以进行判断是否有值，我们只是为了演示三元表达式的实现效果） */}
				{microBlogs.length>0 ? microBlogs.map((microBlog) => (
					<div key={microBlog.id}>
						{/* 2、||或运算符 设置默认值*/}
						<img src={microBlog.author.avatar || 'www.demo.com/avatar.jpg'} alt=""/>
						<div>
							{/*3、&&与运算符：替代if语句*/}
							<p>{microBlog.content.length > 0 && microBlog.content }</p>
							<div>
								<p>{microBlog.author.name}</p>
								<p>{microBlog.publishDate}</p>
							</div>
						</div>
					</div>
				)):(<div>暂无数据</div>)}
			</div>
		</main>
	);
}

export default App;
