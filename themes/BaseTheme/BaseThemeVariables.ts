import Variables, {
   BreakPoints,
   FontSizes,
   Spacing,
   BorderRadius,
   Colors,
   Layers,
   FontFamilies
} from "../definitions/Variables";

export const BREAK_POINTS: BreakPoints = {
   SMALL: "440px",
   MEDIUM: "768px",
   LARGE: "980px"
};

export const FONT_SIZES: FontSizes = {
   XS: "0.5rem",
   S: "0.8rem",
   M: "1rem",
   L: "1.5rem",
   XL: "2.0rem",
   XXL: "2.5rem"
};

export const FONT_FAMILIES: FontFamilies = {
   PRIMARY: "'Roboto', sans-serif",
   SECONDARY: "'Raleway', sans-serif;"
};

export const SPACING: Spacing = {
   XS: "5px",
   S: "10px",
   M: "15px",
   L: "20px",
   XL: "30px",
   XXL: "50px"
};

export const BORDER_RADIUS: BorderRadius = {
   WEAK: "5px",
   MEDIUM: "10px",
   STRONG: "25px"
};

export const COLORS: Colors = {
   PRIMARY: { BASE: "#7F7F7F", DARK: "#545454" },
   NEUTRALS: {
      BASE: "#7F7F7F",
      BLACK: "#2B2B2B",
      DARK: "#545454",
      GREY: "#7F7F7F",
      LIGHT: "#AAAAAA",
      WHITE: "#D3D3D3"
   }
};

export const LAYERS: Layers = {
   MODAL: 60,
   ON_TOP: 40,
   FOREGROUND: 3,
   MID_GROUND: 2,
   BACKGROUND: 1
};
