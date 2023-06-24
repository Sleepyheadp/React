import './App.css';
import React, {useCallback, useEffect, useRef, useState} from "react";
// 如果说定义在函数外部的话，这样在函数重新执行的时候就不会对prev2进行重新赋值null，否则!prev2永远为true
// let prev2 = null
function App() {

  // 使用useCallback解决多个useEffect互相影响的问题
  const [city,setCity] = useState('北京')
  const [weather,setWeather] = useState(20)
  // useCallback只针对依赖空数组时，才会对回调函数进行缓存，否则每次渲染都会返回新的回调函数。
  // getWeather的依赖项为city，每次渲染时都会返回新的回调函数。
  const getWeather = useCallback(()=> {
    if(city === '北京') return 20;
    if(city === '上海') return 25;
    if(city === '重庆') return 30;
  },[city])
  // getSth的依赖项为空数组，它会对回调函数进行缓存，并且每次渲染时都返回相同的回调函数。
  const getSth = useCallback(()=>{
    console.log('getSth')
  },[])
  // 如果想要在多次渲染之间比较prev和getWeather的值，需要使用useRef钩子在渲染之间保持值的持久性
  let prev = useRef(getWeather),
      prev2 = useRef()
  if(!prev2.current){
    prev2.current = getSth
  }else {
    console.log('sth',prev2.current === getSth)
  }
  useEffect(()=>{
    // 判断
    if(!prev.current){
      prev.current = getWeather
    }else{
      console.log('weather',prev.current === getWeather)
    }
    prev.current = getWeather
    setWeather(getWeather())
  },[getWeather])
  return (
    <>
      <p>{city}天气：{weather}度</p>
      <label htmlFor="weather">选择天气：</label>
      <select onChange={(e)=>setCity(e.target.value)} name="" id="weather">
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="重庆">重庆</option>
      </select>
    </>
  )
}
export default App;
