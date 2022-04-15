import { Field, WrappedFieldProps, WrappedFieldMetaProps } from "redux-form";
import { FieldValidatorType } from "../../utils/validators";

// type FormControlValuesType = {
//   meta: { touched: boolean; error?: string; asyncValidating: boolean };
//   children: React.ReactNode;
// };

// type FormControlType = (props: FormControlValuesType) => JSX.Element;

type FormControlPropsType = {
  meta: WrappedFieldMetaProps;
  children: React.ReactNode;
};

const FormControl: React.FC<FormControlPropsType> = ({
  meta: { touched, error, asyncValidating },
  children
}) => {
  const hasError = touched && error;
  return (
    <div className="form-control">
      <div>{children}</div>
      {asyncValidating && <p>Async validating</p>}
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  console.log("textarea props", props);
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  console.log("input props", props);
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

// type U = string | number

export function createField<FormKeysType extends string>(
  name: FormKeysType,
  placeholder: string | null,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps>,
  props = {},
  text = ""
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        validate={validators}
        name={name}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
}

export type GetStringKeys<T> = Extract<keyof T, string>;
