import React,{Component} from 'react'
import {Button} from "antd";
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
      <>
        <span>{number}</span>
        <Button onClick={this.addNumber}>类组件累加</Button>
      </>
    )
  }
}
