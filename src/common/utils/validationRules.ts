import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Field is required";
  }
  if (!values.email) {
    errors.email = "Field is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Field is invalid";
  }
  if (!values.message) {
    errors.message = "Field is required";
  }
  return errors;
}
