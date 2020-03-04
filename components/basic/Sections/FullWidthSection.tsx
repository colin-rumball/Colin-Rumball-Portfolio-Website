import React from "react";
import styled from "styled-components";
import { MaxScreenConstraints } from "../../../styles/BaseStyles";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledFullWidthSectionProps {}

const StyledFullWidthSection = styled.section<StyledFullWidthSectionProps>`
   position: relative;
   width: 100vw;

   left: calc(50% - 1px);
   right: 50%;
   margin-left: -50vw;
   margin-right: -50vw;
`;

interface FullWidthSectionProps extends ComponentBaseProps {}

const FullWidthSectionDefaultProps: FullWidthSectionProps = {};

const FullWidthSection: React.FC<FullWidthSectionProps> = ({ children, className, style }) => {
   return (
      <StyledFullWidthSection className={className} style={style}>
         {children}
      </StyledFullWidthSection>
   );
};

export default withDefaultProps<FullWidthSectionProps>(
   FullWidthSection,
   FullWidthSectionDefaultProps
);
