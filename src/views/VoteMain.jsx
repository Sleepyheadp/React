import React from "react";
import ThemeContext from "../utils/ThemeContext";

class VoteMain extends React.Component {
  // 在这个组件当中我需要做的只是展示公共状态信息而已，
  // 所以我不需要把公共状态信息放在自己的状态池中(放在自己的状态池中什么意思？)，直接从上下文中获取即可
  static contextType = ThemeContext;
    render(){
      // 获取公共状态信息进行绑定
      const {store} = this.context
      let {supNum,oppNum} = store.getState()
      return(
          <div className="main">
              <p>支持人数：{supNum}人</p>
              <p>反对人数：{oppNum}人</p>
          </div>
      )
    }
    // 组件挂载完成后，把让组件更新的方法，放在store的事件池中
    componentDidMount() {
      const {store} = this.context
      store.subscribe(()=>{
        this.forceUpdate()
      })
    }
}

export default VoteMain;
