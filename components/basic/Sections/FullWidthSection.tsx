import React from "react";
import styled from "styled-components";
import { MaxScreenConstraints } from "../../../styles/BaseStyles";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledFullWidthSectionProps {}

const StyledFullWidthSection = styled.div<StyledFullWidthSectionProps>`
   position: relative;
   width: 100vw;

   left: calc(50% - 1px);
   right: 50%;
   margin-left: -50vw;
   margin-right: -50vw;

   padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.XL} 0;
   background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.DARK_BLUE};

   .section-contents {
      ${MaxScreenConstraints};
   }
`;

interface FullWidthSectionProps extends ComponentBaseProps {}

const FullWidthSectionDefaultProps: FullWidthSectionProps = {};

const FullWidthSection: React.FC<FullWidthSectionProps> = ({ children }) => {
   return (
      <StyledFullWidthSection>
         <div className="section-contents">{children}</div>
      </StyledFullWidthSection>
   );
};

export default withDefaultProps<FullWidthSectionProps>(
   FullWidthSection,
   FullWidthSectionDefaultProps
);
