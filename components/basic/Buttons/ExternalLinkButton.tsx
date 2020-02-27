import React, { Props } from "react";
import styled from "styled-components";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";
import Button, { ButtonProps } from "./Button";
import { ThemeContainer } from "../../../themes/definitions/Theme";

interface StyledExternalLinkButtonProps {}

const StyledExternalLinkButton = styled.a<StyledExternalLinkButtonProps>``;

interface ExternalLinkButtonProps extends ComponentBaseProps {
   href: string;
   buttonProps?: ButtonProps;
}

const ExternalLinkButtonDefaultProps: ExternalLinkButtonProps = {
   href: "/#"
};

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
   href,
   className,
   style,
   buttonProps,
   children
}) => {
   return (
      <StyledExternalLinkButton
         className={className}
         style={style}
         href={href}
         rel="noopener noreferrer"
         target="_blank"
      >
         <Button {...buttonProps}>{children}</Button>
      </StyledExternalLinkButton>
   );
};

export default withComponentBase<ExternalLinkButtonProps>(
   ExternalLinkButton,
   ExternalLinkButtonDefaultProps
);
