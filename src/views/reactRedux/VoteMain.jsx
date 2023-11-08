import React, { Component } from 'react'
import ThemeContext from '../../utils/ThemeContext'
export default class VoteMain extends Component {
  // 指定要读取的是哪个context
  static contextType = ThemeContext
  state = {
    ratio: '--'
  }
  // useMemo对处理的逻辑进行缓存
  calculateRatio(supNum,oppNum){
    let total = supNum + oppNum;
    let ratio = '--';
    if(total > 0 ) ratio = (supNum / total * 100).toFixed(2) + '%';
    return ratio
  }
  render() {
    const {store} = this.context
    const {supNum,oppNum} = store.getState()
    // 实现useMemo的效果
    if (this.supNum !== supNum || this.oppNum !== oppNum) {
      this.supNum = supNum;
      this.oppNum = oppNum;
      this.setState({ ratio: this.calculateRatio(supNum, oppNum) });
    }

    return (
      <div>
        <div>支持人数：{supNum}</div>
        <div>反对人数：{oppNum}</div>
        <div>支持率：{this.state.ratio}</div>
      </div>
    )
  }
  componentDidMount(){
    const {store} = this.context
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }
}
