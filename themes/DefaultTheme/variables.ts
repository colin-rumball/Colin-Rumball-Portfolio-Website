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
   S: "0.75rem",
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
   LIGHT_GREY: "#777777",
   GREY: "#555555",
   DARK_GREY: "#222222",
   LIGHT_GREEN: "#1cc949",
   GREEN: "#159436",
   DARK_GREEN: "#159436",
   TAN: "#e8d8b6",
   LIGHT_BLUE: "#27405e",
   BLUE: "#1F324C",
   DARK_BLUE: "#0B1928"
};

export const LAYERS: Layers = {
   MODAL: 60,
   ON_TOP: 40,
   FOREGROUND: 3,
   MID_GROUND: 2,
   BACKGROUND: 1
};

const VARIABLES: Variables = {
   BREAK_POINTS,
   FONT_SIZES,
   FONT_FAMILIES,
   SPACING,
   BORDER_RADIUS,
   COLORS,
   LAYERS
};

export default VARIABLES;
