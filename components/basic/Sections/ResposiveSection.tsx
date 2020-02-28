import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../../../helpers/withDefaultProps";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";

interface StyledResposiveSectionProps {}

const StyledResposiveSection = styled.section<StyledResposiveSectionProps>`
   display: flex;
   flex-direction: column;
   padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L} 0;
   max-width: 100%;

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      flex-direction: row;
      justify-content: space-evenly;
   }
`;

interface ResposiveSectionProps extends ComponentBaseProps {
   className?: string;
   keepChildSpacing?: boolean;
}

const ResposiveSectionDefaultProps: ResposiveSectionProps = {
   keepChildSpacing: false
};

const ResposiveSection: React.FC<ResposiveSectionProps> = ({ className, style, children }) => {
   return (
      <StyledResposiveSection className={className} style={style}>
         {children}
      </StyledResposiveSection>
   );
};

export default withComponentBase<ResposiveSectionProps>(
   ResposiveSection,
   ResposiveSectionDefaultProps
);
