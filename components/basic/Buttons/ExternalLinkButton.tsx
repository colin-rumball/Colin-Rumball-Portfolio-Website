import React, { Props } from "react";
import styled from "styled-components";
import Button, { ButtonProps } from "./Button";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

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
   style,
   buttonProps,
   children
}) => {
   return (
      <StyledExternalLinkButton style={style} href={href} rel="noopener noreferrer" target="_blank">
         <Button {...buttonProps}>{children}</Button>
      </StyledExternalLinkButton>
   );
};

export default withDefaultProps<ExternalLinkButtonProps>(
   ExternalLinkButton,
   ExternalLinkButtonDefaultProps
);
