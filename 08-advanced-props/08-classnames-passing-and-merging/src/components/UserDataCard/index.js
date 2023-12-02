import UserData from "../UserData";
import "./style.css";

function UserDataCard({ className, pClass, message, ...rest }) {
  return (
    <div className={`userDataCard ${className}`}>
      <UserData {...rest} />
      <p className={pClass}>{message}</p>
    </div>
  );
}

export default UserDataCard;
