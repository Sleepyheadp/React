import React, {Component} from 'react';
import {Button} from "antd";
// import * as queryString from "querystring";

class UserA extends Component {
  pushB = ()=> {
    /*props是什么？props是一个对象，里面包含了路由跳转所需的所有信息，都有什么信息？
    history: 路由跳转的历史记录
    location: 当前路由的信息
    match: 当前路由的匹配信息
    staticContext: 静态路由信息*/
    // 1、简单的路由跳转，不携带数据
    // this.props.history.push('/user/b')
    // 2、路径传参「一般不用，麻烦，还要匹配路由表/user/b/:name?/:age」
    // this.props.history.push('/user/b/capoo/18')
    // 2、state传参「推荐」
    this.props.history.push({
      pathname:'/user/b',
      state:{
        name:'capoo',
        age:18
      }
    })
    // 3、query传参「search」
    /*this.props.history.push({
      pathname: '/user/b',
      // 将对象转换成字符串进行传递
      search: queryString.stringify({
        name: 'capoo',
        age: 18
      })
    });*/
  }
  constructor(props) {
    super(props);
    // 箭头函数不需要绑定this
    this.pushB = this.pushB.bind(this);
  }
  render() {
    return (
      <div>
        <div className="title" style={{background: 'lightpink'}}>我是用户A</div>
        <Button onClick={this.pushB}>跳转到B</Button>
      </div>
    );
  }
}

export default UserA;
