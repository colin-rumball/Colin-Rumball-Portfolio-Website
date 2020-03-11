import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ThemeContainer } from "../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../helpers/withDefaultProps";

interface StyledListProps {}

const StyledList = styled.ul<StyledListProps>`
   padding: 0;
   margin: 0;
   list-style-type: none;

   h4.list-title {
      letter-spacing: 2px;
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      padding-left: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
   }

   li.list-item {
      text-indent: -1em;

      @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
         padding-left: 1em;
      }
   }
`;

interface ListProps extends ComponentBaseProps {
   title?: string;
   itemsClassName?: string;
}

const ListDefaultProps: ListProps = {
   itemsClassName: ""
};

const List: React.FC<ListProps> = ({ title, itemsClassName, children, className, style }) => {
   return (
      <StyledList className={className} style={style}>
         {title && <h4 className="list-title">{title}</h4>}
         {React.Children.map(children, child => (
            <li className={`list-item ${itemsClassName}`}>
               <MdKeyboardArrowRight style={{ marginBottom: "-2px" }} /> {child}
            </li>
         ))}
      </StyledList>
   );
};

export default withDefaultProps<ListProps>(List, ListDefaultProps);
