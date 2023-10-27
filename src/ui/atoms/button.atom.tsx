import { FontWeights } from "../../helpers/fonts.helper";
import { BodyProps } from "./body.atom";

interface ButtonProps extends Omit<BodyProps, "textColor"> {}

/* Todo
    - Add transition delay.
*/
const Button = (props: ButtonProps) => (
  <button
    className={`cursor-pointer max-w-xs w-full text-base font-sans bg-slate-800 p-4 rounded-lg text-white ${
      FontWeights[props.textWeight || "bold"]
    } ${props.className} hover:bg-gradient-to-r from-pink-500  to-tomato hover:shadow-2xl shadow-current`}
    children={props.children}
  />
);

export default Button;
