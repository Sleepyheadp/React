import Card from "components/Card";
import "./App.css";
import CardTitle from "components/CardTitle";
import CardContent from "components/CardContent";

function App() {
  return (
    <main className="container">
      <div>

        <Card name={}>
          <CardTitle underline>卡片标题</CardTitle>
          <CardContent>卡片内容</CardContent>
        </Card>
      </div>
    </main>
  );
}

export default App;
