import React from "react";
import {Button} from "antd";
import * as querystring from "querystring";
const  UserD = (props) => {
 const {navigate} = props;
  const pushE = () => {
    // 1、query传参
    // navigate('/user/userE/capoo/123')
    // 2、state传参：对象
    // navigate('/user/userE',{
    //   replace:true,
    //   state:{
    //     id:100,
    //     name:'Capoo'
    //   }
    // })
    // 3、search传参：拼接字符串
    // 第一种写法直接拼接字符串
    // navigate('/user/userE?name=capoo&age=123')
    // 第二种写法用querystring.stringify()方法
    navigate({
      pathname:'/user/userE',
      // search:'?name=capoo&age=18'
      search: querystring.stringify({ name: "capoo", age: 18 }),
    })
  }
  return (
    <>
      <div className="title">
        UserD
      </div>
      <Button onClick={pushE}>跳转到userE</Button>
    </>
  )
}
export default UserD;
