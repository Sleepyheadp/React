import {useEffect, useState} from 'react';

function Request({children}){
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(null);
  useEffect(()=>{
    setLoading(true);
    // 两秒后把data改为capoo
    setTimeout(()=>{
      setData({user:'capoo'});
      setLoading(false);
    },3000)
  }, [])
  // 把处理好的loading/data数据传给父组件
  return children({loading,data})
}

export default Request;
