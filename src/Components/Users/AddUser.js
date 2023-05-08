import React from "react";
import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  const[enteredUsername, setUsername] = useState('');
  const[enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length) {
      return;
    }
    if(+enteredAge < 1) {

    }
    setUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username" value={enteredUsername} onChange={usernameChangeHandler}>Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age" value={enteredAge} onChange={ageChangeHandler}>Age</label>
        <input type="number" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
