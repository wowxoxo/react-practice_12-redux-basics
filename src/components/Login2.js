import { InjectedFormProps, reduxForm } from "redux-form";
import { Form, Field } from "react-final-form";
import { isEmail, required } from "../utils/validators";
import { createField, GetStringKeys, Input } from "./common/FormControl";
import classes from "./Auth.module.css";

const composeEmailValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const LoginForm = ({ message, onSubmit }) => {
  // const handleSubmit = (formData) => {
  //   console.log("formData", formData);
  // };

  return (
    <Form
      initialValues={{
        email: "rihanna@myspace.com"
      }}
      onSubmit={onSubmit}
      validate={(values) => {}}
    >
      {({ handleSubmit, pristine, reset, form }) => (
        <form onSubmit={handleSubmit}>
          <h2>{message}</h2>
          {/* {createField<LoginFormValuesTypeKeys>(
          "email",
          "Email",
          [required, isEmail],
          Input
        )} */}
          <Field
            name="email"
            placeholder="Email"
            validate0={[required, isEmail]}
            validate={composeEmailValidators(required, isEmail)}
            component={Input}
          />
          {/* {createField<LoginFormValuesTypeKeys>(
          "password",
          "Password",
          [required],
          Input,
          {
            type: "password"
          }
        )} */}
          <Field
            name="password"
            placeholder="Password"
            validate={required}
            component={Input}
            type="password"
          />
          <Field name="rememberMe" component={Input} type="checkbox" />{" "}
          <span>remember Me</span>
          {/* {createField<LoginFormValuesTypeKeys>(
          "rememberMe",
          null,
          [],
          Input,
          { type: "checkbox" },
          "remember Me"
        )} */}
          {form.error && <div className="error">{form.error}</div>}
          <div>
            <button disabled={pristine}>Login</button>
          </div>
        </form>
      )}
    </Form>
  );
};

export const Login2 = () => {
  const handleSubmit = (formData) => {
    console.log("formData", formData);
  };

  return (
    <main className={classes.auth}>
      <section>
        <h1>Login</h1>
        <LoginForm message="Hello" onSubmit={handleSubmit} />
      </section>
    </main>
  );
};
