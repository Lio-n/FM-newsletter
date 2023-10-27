type FontWeight = {
  normal: string;
  bold: string;
};

const FontWeights: FontWeight = {
  normal: "font-normal",
  bold: "font-bold",
};

type TextColor = {
  white: string;
  "slate-800": string;
  "slate-700": string;
  tomato: string;
};

const TextColors: TextColor = {
  white: "font-normal",
  "slate-700": "text-slate-700",
  "slate-800": "text-slate-800",
  tomato: "text-tomato",
};

export { FontWeights, type FontWeight, TextColors, type TextColor };
