import React from 'react'
import { useNavigate,Navigate,history } from 'umi'
import qs from 'qs'
export default function personalOne() {
  const navigate = useNavigate()
  const handle = ()=>{
    // query传参
    navigate('/personal/two?id=1&name=capoo1')
    // search传参
    navigate({
			pathname:'/personal/two',
			// search:'?name=capoo&age=18'
			search: qs.stringify({ id:2,name: "capoo2" }),
		})
    // state传参(隐式传参)
    navigate('/personal/two',{
      replace:true,
      state:{
        id:3,
        name:'capoo3'
      }
    })

    // history.push传参
    history.push({
      pathname:'/personal/two',
      query:{
        id:4,
        name:'capoo4'
      }
    })
  }
  return (
    <div>
      personalOne
      <button onClick={handle}>跳转到two</button>
    </div>
  )
}
