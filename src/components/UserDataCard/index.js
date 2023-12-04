import UserData from '../UserData'
import './style.css'

// 父组件传递的是userDate，这里为什么要把reset展开，我没定义reset呀？
// 答：这里的reset是父组件传递的props，包含了userData和message
// 从传递的所有props当中把className，pClass，message，单曲提取出出来，剩下的全部放到了...reset当中.
function UserDataCard({className,pClass,message,...rest}){
  // console.log('reset',reset)
  return (
    <div className={`userDataCard ${className}` }>
      <UserData {...rest}/>
      <p className={pClass}>{message}</p>
    </div>
  )
}
export default UserDataCard;
