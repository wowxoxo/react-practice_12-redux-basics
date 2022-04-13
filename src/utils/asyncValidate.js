import { delay } from "./submit";

export const asyncValidate = (values) => {
  return delay(1000).then(() => {
    if (values.password !== values.confirmPassword) {
      throw {
        confirmPassword: "Your confirmation password is incorrect"
      };
    }
  });
};
