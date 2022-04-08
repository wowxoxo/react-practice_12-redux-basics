import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from "./Auth.module.css";

const upper = value => value && value.toUpperCase();
const trim = value => value && value.trim();

const trimF = (value, name) => {
  console.log(value);
  console.log(name)
  return value
}

const AuthForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        {/* <input type="email" id="email" /> */}
        <Field placeholder="email" component="input" name="email" id="email" type="email" normalize={trim} format={trimF} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <Field placeholder="password" component="input" name="password" id="password" type="password" />
      </div>
      <button>Login</button>
    </form>
  );
};

const AuthReduxForm = reduxForm({
  form: 'auth'
})(AuthForm);

export default AuthReduxForm;
