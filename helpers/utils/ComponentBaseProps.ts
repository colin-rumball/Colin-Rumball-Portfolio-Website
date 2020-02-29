import { Props, CSSProperties } from "react";

export interface ComponentBaseProps extends Props<any> {
   debug?: boolean;
   className?: string;
   style?: CSSProperties;
}
