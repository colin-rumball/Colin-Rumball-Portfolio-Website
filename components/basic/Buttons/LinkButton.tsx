import React, { Props } from "react";
import styled from "styled-components";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";
import Button, { ButtonProps } from "./Button";
import Link from "next/link";
import { ThemeContainer } from "../../../themes/definitions/Theme";

interface StyledLinkButtonProps {}

const StyledLinkButton = styled(Link)<StyledLinkButtonProps>``;

interface LinkButtonProps extends ComponentBaseProps {
   href: string;
   buttonProps?: ButtonProps;
}

const LinkButtonDefaultProps: LinkButtonProps = {
   href: "/#"
};

const LinkButton: React.FC<LinkButtonProps> = ({
   href,
   buttonProps,
   children,
   className,
   style
}) => {
   return (
      <StyledLinkButton href={href}>
         <a style={style} className={className}>
            <Button {...buttonProps}>{children}</Button>
         </a>
      </StyledLinkButton>
   );
};

export default withComponentBase<LinkButtonProps>(LinkButton, LinkButtonDefaultProps);
