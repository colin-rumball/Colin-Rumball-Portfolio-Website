import React, { Props } from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";
import Section from "../../Section";

interface StyledResposiveSectionProps {}

const StyledResposiveSection = styled(Section)<StyledResposiveSectionProps>`
   display: flex;
   flex-direction: column;

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
      flex-direction: row;
      justify-content: space-evenly;
   }
`;

interface ResposiveSectionProps extends ComponentBaseProps {}

const ResposiveSectionDefaultProps: ResposiveSectionProps = {};

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
