import React, { Props } from "react";
import styled from "styled-components";
import Button, { ButtonProps } from "./Button";
import Link from "next/link";
import { ThemeContainer } from "../../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledLinkButtonProps {}

const StyledLinkButton = styled(Link)<StyledLinkButtonProps>``;

interface LinkButtonProps extends ComponentBaseProps {
   href: string;
   linkProps?: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
   >;
   buttonProps?: ButtonProps;
}

const LinkButtonDefaultProps: LinkButtonProps = {
   href: "/#"
};

const LinkButton: React.FC<LinkButtonProps> = ({
   href,
   linkProps,
   buttonProps,
   children,
   style
}) => {
   return (
      <StyledLinkButton href={href}>
         <a style={style} {...linkProps}>
            <Button {...buttonProps}>{children}</Button>
         </a>
      </StyledLinkButton>
   );
};

export default withDefaultProps<LinkButtonProps>(LinkButton, LinkButtonDefaultProps);
