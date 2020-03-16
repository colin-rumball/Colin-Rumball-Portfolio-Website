import { ContentDistribution, ContentPosition, SelfPosition } from "csstype";
import React from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

const getElementFlexProps = props => {
   const { justifyContent, alignItems, flexWrap, flexDirection, alignContent } = props;
   return { justifyContent, alignItems, flexWrap, flexDirection, alignContent };
};

interface StyledElementGroupProps extends ElementGroupProps {}

const StyledElementGroup = styled.article<StyledElementGroupProps>`
   position: relative;
   display: flex;
   margin-top: -${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};

   .ElementGroup__Element {
      display: block;

      & > * {
         display: block;
         margin-top: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
      }
   }

   ${props => {
      return getElementFlexProps(props);
   }};
`;

interface ElementGroupProps extends ComponentBaseProps {
   justifyContent?: ContentDistribution | ContentPosition | "left" | "normal";
   alignItems?: SelfPosition | "baseline" | "normal" | "stretch";
   flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
   flexDirection?: "column" | "column-reverse" | "row" | "row-reverse";
   alignContent?: ContentDistribution | ContentPosition | "baseline" | "normal";
}

const ElementGroupDefaultProps: ElementGroupProps = {
   justifyContent: "flex-start",
   alignItems: "stretch",
   flexWrap: "nowrap",
   flexDirection: "row",
   alignContent: "stretch"
};

const ElementGroup: React.FC<ElementGroupProps> = ({ style, className, children, ...rest }) => {
   const flexProps = getElementFlexProps(rest);
   return (
      <StyledElementGroup style={style} className={className} {...flexProps}>
         {React.Children.map(children, child => (
            <div className="ElementGroup__Element">{child}</div>
         ))}
      </StyledElementGroup>
   );
};

export default withDefaultProps<ElementGroupProps>(ElementGroup, ElementGroupDefaultProps);
