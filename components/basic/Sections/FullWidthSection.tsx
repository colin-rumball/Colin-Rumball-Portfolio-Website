import React from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";
import Section from "./Section";

interface StyledFullWidthSectionProps {}

const StyledFullWidthSection = styled(Section)<StyledFullWidthSectionProps>`
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
