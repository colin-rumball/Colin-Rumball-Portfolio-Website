import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../../helpers/withDefaultProps";
import { ThemeContainer } from "../../themes/definitions/Theme";

interface StyledCardProps {}

const StyledCard = styled.article<StyledCardProps>`
   background-color: #fff;

   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.MEDIUM};
   padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
   margin: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};

   max-width: 100%;
`;

interface CardProps extends Props<any> {}

const CardDefaultProps: CardProps = {};

const Card: React.FC<CardProps> = ({ children }) => {
   return <StyledCard>{children}</StyledCard>;
};

export default withDefaultProps<CardProps>(Card, CardDefaultProps);
