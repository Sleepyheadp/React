import React, {useEffect,useContext, useState} from "react";
import './Vote.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import ThemeContext from "../utils/ThemeContext";

const Vote = function Vote() {
    const {store} = useContext(ThemeContext)
    let {supNum,oppNum} = store.getState()
    // 组件第一次渲染完毕后，把让组件更新的方法，放在store的事件池中
    let [num,setNum] = useState();
    const update = ()=>{
        setNum(num + 1)
    }
    useEffect(()=>{
        // 把让组件更新的方法放在store的事件池中
        // 返回的unsubscribe方法执行，可以把刚才放入事件池中的方法移除掉
        let unsubscribe = store.subscribe(update)
        console.log('unsubscribe',unsubscribe)
    },[])
    return <div className="vote-box">
        <div className="header">
            <h2 className="title">React是很棒的前端框架</h2>
            <span className="num">{supNum + oppNum}</span>
        </div>
        <VoteMain />
        <VoteFooter />
    </div>;
};

export default Vote;
