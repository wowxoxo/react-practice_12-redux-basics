export type FieldValidatorType = (value: string) => string | undefined;

const minLength =
  (min: number): FieldValidatorType =>
  (value) =>
    value && value.length < min ? `Must be ${min} characters long` : undefined;
export const minLength5: FieldValidatorType = minLength(5);
export const isEmail: FieldValidatorType = (value) =>
  value && value.includes("@") ? undefined : "Should be correct email address";
export const required: FieldValidatorType = (value) =>
  value ? undefined : "Required";
