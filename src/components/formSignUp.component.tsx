import { FormHTMLAttributes } from "react";
import Button from "../ui/atoms/button.atom";
import TextField from "../ui/atoms/textField.atom";

interface FormSignUpProps extends FormHTMLAttributes<HTMLFormElement> {}

const FormSignUp = (props: FormSignUpProps) => {
  return (
    <form {...props}>
      <TextField name="email" placeholder="email@company.com" label="Email" />
      <Button className="mt-6">Subscribe to monthly newsletter</Button>
    </form>
  );
};

export default FormSignUp;
