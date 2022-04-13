import { Field } from "redux-form";

const FormControl = ({ meta: { touched, error, asyncValidating }, children }) => {
  const hasError = touched && error
  return (<div className="form-control">
    <div>
      {children}
    </div>
    {asyncValidating && <p>Async validating</p>}
    {hasError && <span className="error">{error}</span>}
  </div>)
}

export const Textarea = (props) => {
  console.log('textarea props', props)
  const { input, meta, ...restProps } = props
  return <FormControl {...props}>
    <textarea {...input} {...restProps}  />
  </FormControl>
}

export const Input = (props) => {
  console.log('input props', props)
  const { input, meta, ...restProps } = props
  return <FormControl {...props}>
    <input {...input} {...restProps} />
  </FormControl>
}

export function createField(name, placeholder, validators, component, props = {}, text = '') {
  return <div>
    <Field placeholder={placeholder} validate={validators} name={name} component={component} {...props} />{text}
  </div>
}