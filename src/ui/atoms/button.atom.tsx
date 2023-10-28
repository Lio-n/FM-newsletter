import { ButtonHTMLAttributes } from "react";
import { FontWeights } from "../../helpers/fonts.helper";
import { BodyProps } from "./body.atom";

interface ButtonProps extends Omit<BodyProps, "textColor" | "children">, ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button = (props: ButtonProps) => (
  <button
    {...props}
    disabled={props.disabled}
    className={`cursor-pointer max-w-lg w-full text-base font-sans bg-slate-800 p-4 rounded-lg text-white ${
      FontWeights[props.textWeight || "bold"]
    } ${props.className} hover:bg-gradient-to-r from-pink-500 to-tomato hover:shadow-2xl shadow-current ${props.disabled ? "opacity-60" : ""}`}
    children={props.children}
  />
);

export default Button;
