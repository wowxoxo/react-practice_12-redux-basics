import { InjectedFormProps, reduxForm } from "redux-form";
import { isEmail, required } from "../utils/validators";
import { createField, Input } from "./common/FormControl";
import classes from "./Auth.module.css";

type LoginFormOwnProps = {
  message: string;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormDataTypes, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, message }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{message}</h2>
      {createField("email", "Email", [required, isEmail], Input)}
      {createField("password", "Password", [required], Input, {
        type: "password"
      })}
      {createField(
        "rememberMe",
        null,
        [],
        Input,
        { type: "checkbox" },
        "remember Me"
      )}

      {error && <div className="error">{error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataTypes, LoginFormOwnProps>({
  form: "login"
})(LoginForm);

export type LoginFormDataTypes = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login: React.FC = () => {
  const handleSubmit = (formData: LoginFormDataTypes) => {
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
