import React from "react";
// import {useContext,useEffect,useState} from 'react'
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
// import ThemeContext from '../../utils/ThemeContext'
import { connect } from "react-redux";
const Vote = (props) => {
	let { supNum, oppNum } = props;
	return (
		<>
			<div>人数总和:{supNum + oppNum}</div>
			<VoteMain></VoteMain>
			<VoteFooter></VoteFooter>
		</>
	);
	// const {store} = useContext(ThemeContext)
	// let {supNum,oppNum} = store.getState()
	// 当修改数据时，怎样才能让视图进行更新？
	/* // 通过subscribe方法将修改数据的方法放入事件流中，当数据发生变化时，会触发事件流，从而触发视图的更新
  let [num,setNum] = useState(0)
  const changeNum = () => {
    // 当数据发生改变时，会触发changeNum方法，
    setNum(num + 1)
  }
  // 当数据发生改变时视图就会更新
  useEffect(()=>{
    // 组件加载时调用
    let unSubscribe = store.subscribe(changeNum)
    // 可选的清除函数，组件卸载时调用
    return () => {
      unSubscribe()
    }
  },[num])
  */
	// 把让视图更新的方法简化一下「就是通过改变state的值」
	// let [_,setNum] = useState(0)
	// useEffect(()=>{
	//   store.subscribe(()=>{
	//     setNum(+new Date())
	//   })
	// })
};
export default connect((state) => state.vote)(Vote);
