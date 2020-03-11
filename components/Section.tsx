import React from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledSectionProps {}

const StyledSection = styled.section<StyledSectionProps>`
   position: relative;
   width: 100%;

   margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M} 0;
`;

interface SectionProps extends ComponentBaseProps {}

const SectionDefaultProps: SectionProps = {};

const Section: React.FC<SectionProps> = ({ className, style, children }) => {
   return (
      <StyledSection className={className} style={style}>
         {children}
      </StyledSection>
   );
};

export default withDefaultProps<SectionProps>(Section, SectionDefaultProps);
