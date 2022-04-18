import { InjectedFormProps, reduxForm, Field } from "redux-form";
import { isEmail, required } from "../utils/validators";
import { createField, GetStringKeys, Input } from "./common/FormControl";
import classes from "./Auth.module.css";

const LoginForm = ({ handleSubmit, error, message }) => {
  return (
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
        validate={[required, isEmail]}
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
        validate={[required]}
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
      {error && <div className="error">{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export const Login2 = () => {
  const handleSubmit = (formData) => {
    console.log("formData", formData);
  };

  return (
    <main className={classes.auth}>
      <section>
        <h1>Login</h1>
        <LoginReduxForm message="Hello" onSubmit={handleSubmit} />
      </section>
    </main>
  );
};
