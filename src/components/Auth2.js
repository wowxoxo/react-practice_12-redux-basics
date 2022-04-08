import classes from "./Auth.module.css";
import AuthReduxForm from "./AuthForm";

const Auth2 = () => {
  const loginHandler = (formData) => {
    // dispatch(authActions.login());
    console.log("formData", formData);
  };

  return (
    <main className={classes.auth}>
      <section>
        <AuthReduxForm onSubmit={loginHandler} />
      </section>
    </main>
  );
};

export default Auth2;
