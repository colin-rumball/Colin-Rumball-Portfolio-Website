import React, { Props } from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledResposiveSectionProps {}

const StyledResposiveSection = styled.section<StyledResposiveSectionProps>`
   display: flex;
   flex-direction: column;
   margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.L} 0;
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

export default withDefaultProps<ResposiveSectionProps>(
   ResposiveSection,
   ResposiveSectionDefaultProps
);
