import React, {Component} from 'react';
// import * as queryString from "querystring";

class UserB extends Component {
  constructor(props) {
    super(props);
    // 这里的state定义变量跟useState是一样的，只不过这里是类组件，所以用的是this.state
    this.state = {};
  }
  componentDidMount() {
    // 不管什么传参，进来先打印props，按需取值
    console.log('userB:',this.props);
  }

  render() {
    // 疑问：为什么用了可选链操作符?.还需要加个||{}，
    // 因为第一次进来的时候，state是undefined，不能从undefined或null中解构出来，会报错
    let {name,age} = this.props.location?.state || {};
    return (
      <>
        <div style={{background:'lightblue'}}>
          <div>我是用户B</div>
          <div>userA传递过来的数据：{name}{age}</div>
        </div>
      </>
    );
  }
}

export default UserB;
