import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledCloseIconProps {}

const StyledCloseIcon = styled(AiOutlineClose)<StyledCloseIconProps>`
   position: absolute;
   top: 11px;
   right: 10px;

   font-size: 20px;
   opacity: 0.9;
   color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.LIGHT};
   transition: opacity 0.4s ease-out, transform 0.4s ease-out;

   &:hover {
      color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.DARK};
      opacity: 1;
      transform: scale(1.1);
      cursor: pointer;
   }

   &:active {
      transform: scale(0.9);
   }
`;

interface CloseIconProps extends ComponentBaseProps {
   onClick?: MouseEventHandler<any>;
}

const CloseIconDefaultProps: CloseIconProps = {};

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
   return <StyledCloseIcon onClick={onClick} />;
};

export default withDefaultProps<CloseIconProps>(CloseIcon, CloseIconDefaultProps);
