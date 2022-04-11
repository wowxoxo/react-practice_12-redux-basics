import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import classes from "./Auth.module.css";

const upper = value => value && value.toUpperCase();
const trim = value => value && value.trim();

const trimF = (value) => {
  console.log(value);
  // xxx-xxx-xx-xx
  if (!value) return ''
  const split = /.{1,3}/g;
  value = value.substring(0, 10)

  return value.substring(0, 7).match(split).join('-') + value.substring(7)
}

const dashParser = (value) => value ? value.replace(/-/g, '') : '';

const renderInput = (field) => {
  console.log('field', field);
  const { input, type, placeholder, id, meta, cert } = field
  return <div>
    <input {...input} type={type} placeholder={placeholder} id={id} />
    {cert && <span>{cert}</span>}
    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
  </div>;
}

class CounterComp extends Component {
  render() {
    let { input : { value, onChange }, meta, initialVal
  } = this.props;
  // value = value || initialVal;
  console.log(this.props)

  return (
    <div>
      <span>The current value is {value}</span>
      <br />
      <button type="button" onClick={() => onChange(+value + 1) }>Increment</button>
      <button type="button" onClick={() => onChange(value - 1) }>Decrement</button>
      <br />
      {meta.dirty && meta.warning && <span className="warning">{meta.warning}</span>}
    </div>
  )
}
}

const ContactPerson = (contactPerson, idx, fields) => (<li key={idx}>
  <button type="button" onClick={() => fields.remove(idx)}>Remove</button>
  <br />
  <Field name={`${contactPerson}.firstName`} type='text' component="input" placeholder="First Name" />
  <br />
  <Field name={`${contactPerson}.lastName`} type='text' component="input" placeholder="Last Name" />
</li> )

const renderContactPersons = ({ fields }) => (<ul>
  <button type="button" onClick={() => fields.push({})}>Add contact person</button>
  { fields.map(ContactPerson)}
</ul>)

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  }
  return errors
}

const minLength = min => value => value && value.length < min ? `Must be ${min} characters long` : undefined
const minLength5 = minLength(5)
const isEmail = value => value && value.includes("@") ? undefined : "Should be correct email address" 

const warn = values => {
  const warning = {}
  if (values.counter < 5) {
    warning.counter = "It to small for me"
  }
  return warning
}

const AuthForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="username">Username</label>
        <Field placeholder="username" component={renderInput} name="username" id="username" type="text" cert="my-cert" />
      </div>
      <Field name="counter" component={CounterComp} initialVal={1} />
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        {/* <input type="email" id="email" /> */}
        <Field placeholder="email" component={renderInput} name="email" id="email" type="email" normalize={upper} format={trimF} parse={dashParser} validate={[isEmail, minLength5]} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <Field placeholder="password" component="input" name="password" id="password" type="password" />
      </div>
      <FieldArray name="contactPersons" component={renderContactPersons} />
      <button disabled={props.pristine}>Login</button>
    </form>
  );
};

const AuthReduxForm = reduxForm({
  form: 'auth',
  // validate,
  // warn
})(AuthForm);

export default AuthReduxForm;
