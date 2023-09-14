import React,{Component} from 'react'
export default class ClassAdd extends Component {
  state = {
    number:0
  }
  addNumber = () => {
    this.setState({
      number:this.state.number + 1
    })
  }
  render() {
    let { number} = this.state
    return (
      <div className="useState box">
        <h4>useState：类组件实现动态累加</h4>
        <span>{number}</span>
        <button onClick={this.addNumber}>累加</button>
      </div>
    )
  }
}
