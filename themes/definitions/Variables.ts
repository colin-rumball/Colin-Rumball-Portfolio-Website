export interface BreakPoints {
   SMALL: string;
   MEDIUM: string;
   LARGE: string;
}

export interface FontSizes {
   XS: string;
   S: string;
   M: string;
   L: string;
   XL: string;
   XXL: string;
}

export interface FontFamilies {
   PRIMARY: string;
   SECONDARY: string;
}

export interface Spacing {
   XS: string;
   S: string;
   M: string;
   L: string;
   XL: string;
   XXL: string;
}

export interface BorderRadius {
   WEAK: string;
   MEDIUM: string;
   STRONG: string;
}

export interface Colors {
   LIGHT_GREY: string;
   GREY: string;
   DARK_GREY: string;
   LIGHT_GREEN: string;
   GREEN: string;
   DARK_GREEN: string;
   Tan: string;
   LightBlue: string;
   Blue: string;
   DarkBlue: string;
}

export interface Layers {
   MODAL: number;
   ON_TOP: number;
   FOREGROUND: number;
   MID_GROUND: number;
   BACKGROUND: number;
}

interface Variables {
   BREAK_POINTS: BreakPoints;
   FONT_SIZES: FontSizes;
   FONT_FAMILIES: FontFamilies;
   SPACING: Spacing;
   BORDER_RADIUS: BorderRadius;
   COLORS: Colors;
   LAYERS: Layers;
}

export default Variables;
