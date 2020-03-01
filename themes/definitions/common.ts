export type ComponentStateColor = {
   DEFAULT: string;
   ALTERNATE: string;
};

type ThemedColor = {
   BASE: string;
   BLACK?: string;
   DARK?: string;
   GREY?: string;
   LIGHT?: string;
   WHITE?: string;
};

export type CommonColor = ThemedColor;

export type MultiColor = Array<string> & Function;
