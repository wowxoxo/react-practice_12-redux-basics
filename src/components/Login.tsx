import { InjectedFormProps, reduxForm } from "redux-form";
import { isEmail, required } from "../utils/validators";
import { createField, GetStringKeys, Input } from "./common/FormControl";
import classes from "./Auth.module.css";
import { useEffect } from "react";

type LoginFormOwnProps = {
  message: string;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormDataTypes, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, message }) => {
  useEffect(() => {
    console.warn("RERENDER");
  });

  return (
    <form onSubmit={handleSubmit}>
      <h2>{message}</h2>
      {createField<LoginFormValuesTypeKeys>(
        "email",
        "Email",
        [required, isEmail],
        Input
      )}
      {createField<LoginFormValuesTypeKeys>(
        "password",
        "Password",
        [required],
        Input,
        {
          type: "password"
        }
      )}
      {createField<LoginFormValuesTypeKeys>(
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
  // 88: string;
};

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormDataTypes>;

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
