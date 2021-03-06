import { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { UserInform } from "./Interfaces";

function App() {
  const [usersList, setUsersList] = useState<UserInform[]>([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUsersList: UserInform[]) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
