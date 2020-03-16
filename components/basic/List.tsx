import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { ComponentBaseProps } from "../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../helpers/withDefaultProps";
import { ThemeContainer } from "../../themes/definitions/Theme";

interface StyledListProps {}

const StyledList = styled.ul<StyledListProps>`
   padding: 0;
   margin: 0;
   list-style-type: none;

   h4.list-title {
      letter-spacing: 2px;
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
      margin-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S};
   }

   li.list-item {
      text-indent: -1em;
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         padding-left: 1em;
      }
   }
`;

interface ListProps extends ComponentBaseProps {
   title?: string;
   itemsClassName?: string;
   customBullet?: any;
}

const ListDefaultProps: ListProps = {
   itemsClassName: ""
};

const List: React.FC<ListProps> = ({
   title,
   customBullet,
   itemsClassName,
   children,
   className,
   style
}) => {
   return (
      <StyledList className={className} style={style}>
         {title && <h4 className="list-title">{title}</h4>}
         {React.Children.map(children, child => (
            <li className={`list-item ${itemsClassName}`}>
               {customBullet ? (
                  customBullet
               ) : (
                  <MdKeyboardArrowRight style={{ marginBottom: "-3px" }} />
               )}
               {child}
            </li>
         ))}
      </StyledList>
   );
};

export default withDefaultProps<ListProps>(List, ListDefaultProps);
