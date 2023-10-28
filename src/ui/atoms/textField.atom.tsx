import { InputHTMLAttributes } from "react";
import Phrase from "./phrase.atom";

type ErrorInput = {
  hasError: boolean;
  msg?: string | null | undefined;
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: ErrorInput;
}

const TextField = ({ label, name, type = "text", ...props }: TextFieldProps) => (
  <label htmlFor={name} className="flex flex-col max-w-lg w-full gap-2">
    <div className="flex justify-between">
      {label && <Phrase children={label} className="text-sm" textWeight="bold" textColor="slate-800" />}
      {props?.error?.msg && <Phrase children={props?.error.msg} className="text-sm" textWeight="bold" textColor="tomato" />}
    </div>
    <input
      type={type}
      id={name}
      className={`px-5 py-3 rounded-lg placeholder:text-slate-400 border border-current border-slate-400 focus:border-slate-700 text-slate-700 ${
        props.error?.hasError && "text-tomato border-tomato focus:border-tomato bg-orange-50"
      }`}
      {...props}
    />
  </label>
);

export type { ErrorInput };
export default TextField;
