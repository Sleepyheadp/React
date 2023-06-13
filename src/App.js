import "./App.css";

function App() {
	return (
		<main className="container">
			<h1
				style={{
					color: "pink",
					fontSize: "32px",
				}}
			>
				hello React!
			</h1>
			<div>
				<textarea placeholder="写点什么吧..." cols="30" rows="5"></textarea>
				<button>发布</button>
			</div>
		</main>
	);
}

export default App;
