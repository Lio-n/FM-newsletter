import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => (
  <div
    className={`ms:py-8 ms:px-5 ms:shadow-2xl shadow-slate-800 rounded-2xl bg-white w-full h-full max-w-min mx-auto ${props.className}`}
    children={props.children}
  />
);

export default Card;
