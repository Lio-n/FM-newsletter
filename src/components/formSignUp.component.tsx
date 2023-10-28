import { ChangeEvent, FormEvent, FormEventHandler, FormHTMLAttributes, useContext, useState } from "react";
import Button from "../ui/atoms/button.atom";
import TextField, { ErrorInput } from "../ui/atoms/textField.atom";
import validateEmail from "../validations/email.validation";
import EmailContext from "../contexts/email.context";

interface FormSignUpProps extends FormHTMLAttributes<HTMLFormElement> {}

const FormSignUp = (props: FormSignUpProps) => {
  const { setEmail } = useContext(EmailContext);
  const inputErrorDefault = { msg: null, hasError: false };
  const [inputError, setInputError] = useState<ErrorInput>(inputErrorDefault);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValue = e.currentTarget.email.value;
    setEmail(emailValue);
  };

  const handleOnValidateInputValue: FormEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.currentTarget.value) {
      setInputError(inputErrorDefault);
      return;
    }

    const errorMessage = "Valid Email required";
    const isAValidEmail = validateEmail(e.currentTarget.value);

    !isAValidEmail ? setInputError({ msg: errorMessage, hasError: true }) : setInputError(inputErrorDefault);
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      <TextField onChange={handleOnValidateInputValue} name="email" placeholder="email@company.com" label="Email" type="text" error={inputError} />
      <Button className="mt-6" disabled={inputError.hasError}>
        Subscribe to monthly newsletter
      </Button>
    </form>
  );
};

export default FormSignUp;
