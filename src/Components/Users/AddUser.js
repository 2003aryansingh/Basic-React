import React from "react";
import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {

  const[enteredUsername, setUsername] = useState('');
  const[enteredAge, setEnteredAge] = useState('');
  const[isError, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age'
      });
      return;
    }
    if(+enteredAge < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid age > 0'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <React.Fragment>
    {isError && <ErrorModal title={isError.title} message={isError.message} onError={errorHandler}/>} 
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </React.Fragment>
  );
};

export default AddUser;
