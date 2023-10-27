import { type FontWeight, FontWeights, type TextColor, TextColors } from "../../helpers/fonts.helper";

interface BodyProps {
  textWeight?: keyof FontWeight;
  textColor?: keyof TextColor;
  className?: string;
  children?: string;
}

const Body = (props: BodyProps) => (
  <p
    className={`text-base font-sans ${FontWeights[props.textWeight || "normal"]} ${TextColors[props.textColor || "white"]} ${props.className}`}
    children={props.children}
  />
);

export type { BodyProps };
export default Body;
