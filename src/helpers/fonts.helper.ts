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
  white: "text-white", // hsl(0, 0%, 100%)
  "slate-700": "text-slate-700", // hsl(235, 18%, 26%)
  "slate-800": "text-slate-800", // hsl(234, 29%, 20%)
  tomato: "text-tomato", // hsl(4, 100%, 67%)
};

export { FontWeights, type FontWeight, TextColors, type TextColor };
