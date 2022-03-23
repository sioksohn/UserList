import { UserInform } from "../../Interfaces";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props: { users: UserInform[] }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: UserInform) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
