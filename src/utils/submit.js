import { SubmissionError } from "redux-form";

export const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export function submit(values) {
  return delay(1000).then(() => {
    if (
      ["username", "nagibator", "george lucas", "admin"].includes(
        values.username
      )
    ) {
      throw new SubmissionError({
        username: "This username is not allowed",
        _error: "Auth failed!"
      });
    } else if (values?.password?.length < 3) {
      throw new SubmissionError({
        password: "Your password must be at least 3 characters",
        _error: "Auth failed!"
      });
    } else {
      console.log(`You submitted:\n${JSON.stringify(values, null, 2)}`);
    }
  });
}
