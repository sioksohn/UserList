import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import { ErrorMessage } from "../../Interfaces";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props: {
  onAddUser: (arg0: string, arg1: string) => void;
}) => {
  const nameInputRef = useRef<null | HTMLInputElement>(null);
  const ageInputRef = useRef<null | HTMLInputElement>(null);
  const [error, setError] = useState<ErrorMessage | null>();

  const addUserHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current?.value;
    const enteredAge = ageInputRef.current?.value;
    if (
      enteredUsername?.trim().length === 0 ||
      enteredAge?.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredAge && +enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    if (enteredUsername && enteredAge) {
      props.onAddUser(enteredUsername, enteredAge);
    }
    if (nameInputRef.current && nameInputRef.current.value) {
      nameInputRef.current.value = "";
    }
    if (ageInputRef.current && ageInputRef.current.value) {
      ageInputRef.current.value = "";
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
