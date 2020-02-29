import React from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../themes/definitions/Theme";
import { ComponentBaseProps } from "../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../helpers/withDefaultProps";

interface StyledListProps {}

const StyledList = styled.ul<StyledListProps>`
   padding: 0;
   margin: 0;
   list-style-type: none;

   h4.list-title {
      letter-spacing: 1px;
   }

   li.list-item {
      font-size: ${({ theme }: ThemeContainer) => theme.VARIABLES.FONT_SIZES.S};
      padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
   }
`;

interface ListProps extends ComponentBaseProps {
   title?: string;
   items?: string[];
}

const ListDefaultProps: ListProps = {};

const List: React.FC<ListProps> = ({ title, items, className, style }) => {
   return (
      <StyledList className={className} style={style}>
         {title && <h4 className="list-title">{title}</h4>}
         {items &&
            items.map(i => (
               <li key={i} className="list-item">
                  > {i}
               </li>
            ))}
      </StyledList>
   );
};

export default withDefaultProps<ListProps>(List, ListDefaultProps);
