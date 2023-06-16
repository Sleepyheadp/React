import UserData from '../UserData'
import './style.css'

// 父组件传递的是userDate，这里为什么要把reset展开，我没定义reset呀？
// 答：这里的reset是父组件传递的props，包含了userData和message
function UserDataCard({className,pClass,message,...reset}){
  // console.log('reset',reset)
  return (
    <div className={`userDataCard ${className}` }>
      <UserData {...reset}/>
      <p className={pClass}>{message}</p>
    </div>
  )
}
export default UserDataCard;
