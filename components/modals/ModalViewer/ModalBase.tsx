import React from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";

interface StyledModalBaseProps {}

const StyledModalBase = styled.div<StyledModalBaseProps>`
   background: #fff;
   height: 75vh;
   overflow: auto;
   border: 1px solid rgba(0, 0, 0, 0.9);
   z-index: ${({ theme }: ThemeContainer) => theme.VARIABLES.LAYERS.MODAL};
   padding: 40px 40px 0 40px;

   &::-webkit-scrollbar {
      width: 0;
   }

   @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.LARGE}) {
      max-width: 980px;
   }

   .gradient-bottom {
      position: absolute;
      left: 1px;
      right: 1px;
      bottom: 1px;
      background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, #fff);
      min-height: 40px;
      max-height: 40px;
   }
`;

interface ModalBaseProps extends ComponentBaseProps {}

const ModalBaseDefaultProps: ModalBaseProps = {};

const ModalBase: React.FC<ModalBaseProps> = ({ children }) => {
   return (
      <StyledModalBase>
         {children}
         {/* <div className="gradient-bottom" /> */}
      </StyledModalBase>
   );
};

export default withComponentBase<ModalBaseProps>(ModalBase, ModalBaseDefaultProps);
