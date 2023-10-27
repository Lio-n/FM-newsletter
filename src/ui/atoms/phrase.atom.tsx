import { FontWeights, TextColors } from "../../helpers/fonts.helper";
import { type BodyProps } from "./body.atom";

interface PhraseProps extends BodyProps {}

const Phrase = (props: PhraseProps) => (
  <span
    className={`text-base font-sans ${FontWeights[props.textWeight || "normal"]} ${TextColors[props.textColor || "white"]} ${props.className}`}
    children={props.children}
  />
);

export default Phrase;
