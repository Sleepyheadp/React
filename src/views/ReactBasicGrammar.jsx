import "./common.css"
import {Button, Checkbox} from "antd"
export default function ReactBasicGrammar() {
  const styleOne = {
    color: "pink",
  }
  const name = "capoo"
  function content() {
    return 'hello React'
  }
  const people = [
    {id:'1',name:'a'},
    {id:'2',name:'b'},
    {id:'3',name:'c'},
  ]
  function clickMe(x,y,ev){
    console.log(x,y,ev,this)
  }
  return (
    <>
      <div className="item">
        <h1 className="title">react基础语法</h1>
        <h4>1、样式编写:</h4>
        <div>
          <div
            style={{ color: "skyblue", fontSize: "20px", fontWeight: "bold"}}
          >
            style内联样式
          </div>
          <div className='importClassName'>引入样式文件修改样式</div>
          <div style={styleOne}>定义样式变量</div>
        </div>
        <h4>2、label&input搭配使用</h4>
        <div className="preference">
          <label htmlFor="cheese">Do you like cheese?</label>
          <Checkbox name="cheese" id="cheese" />
        </div>
        <h4>3、JSX表达式</h4>
        <div>
          <p>「{name} {content()}」</p>
        </div>
        <div>
          <p>在JSX中循环遍历数据</p>
          {people.map((item) => (
            // 循环遍历的时候添加key值，可以提高渲染效率
            <div key={item.id}>{item.id}、{item.name}</div>
          ))}
        </div>
        <h4>4、合成事件</h4>
        <Button onClick={clickMe.bind(this,1,2)}>点击我</Button>
        {/* <Button onClick={(e)=>clickMe(1,2,e)}>点击我</Button> */}
      </div>
    </>
  )
}
