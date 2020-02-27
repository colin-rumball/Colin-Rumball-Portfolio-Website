import { Props } from "react";
import { CSSProperties } from "styled-components";
import withDefaultProps from "./withDefaultProps";

export interface ComponentBaseProps extends Props<any> {
   debug?: boolean;
   className?: string;
   style?: CSSProperties;
}

function withComponentBase<T extends ComponentBaseProps>(Component: React.FC, defaultProps?: T) {
   const renderBaseWithComponent = (props: T) => {
      return <Component {...props} />;
   };

   if (defaultProps) {
      return withDefaultProps(renderBaseWithComponent, defaultProps);
   } else {
      return renderBaseWithComponent;
   }
}

export default withComponentBase;
