import { FontWeights, TextColors } from "../../helpers/fonts.helper";
import { BodyProps } from "./body.atom";

interface TitleProps extends BodyProps {}

const Title = (props: TitleProps) => (
  <h1
    className={`text-7xl ${FontWeights[props.textWeight || "normal"]} ${TextColors[props.textColor || "white"]} ${props.className}`}
    children={props.children}
  />
);

export default Title;
