import React, {useEffect,useContext, useState} from "react";
import './Vote.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import ThemeContext from "../utils/ThemeContext";

const Vote = function Vote() {
    const {store} = useContext(ThemeContext)
    let {supNum,oppNum} = store.getState()
    // 组件第一次渲染完毕后，把让组件更新的方法，放在store的事件池中
    //「注意」我们这里设置num的目的就是为了在点击增加按钮的时候同时也触发update方法，让组件重新渲染，
    // 这个时候supNum和oppNum就会重新获取到最新的值，从而让页面上的数据也会更新
    // 因为这两个值我们是通过store在页面第一次加载的时候获取的，所以我们需要让组件重新渲染（这是redux的方式
    let [num,setNum] = useState(0);
    const update = ()=>{
        setNum(num + 1)
    }
    // 通过useEffect
    useEffect(()=>{
        // 把让num更新的方法放在store的事件池中，当我们调用dispatch方法的时候，会把事件池中的方法执行
        // 返回的unsubscribe方法执行，可以把刚才放入事件池中的方法移除掉
        let unsubscribe = store.subscribe(update)
        return ()=>{
            unsubscribe()
            console.log('上一个事件清除了');
        }
    },[num])
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
