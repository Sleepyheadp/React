import UserData from "../UserData";
import "./style.css";

function UserDataCard({ message, ...rest }) {
  return (
    <div className="userDataCard">
      <UserData {...rest} />
      <p>{message}</p>
    </div>
  );
}

export default UserDataCard;
