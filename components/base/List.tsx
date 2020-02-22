import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../../helpers/withDefaultProps";
import { ThemeContainer } from "../../themes/definitions/Theme";

interface StyledListProps {}

const StyledList = styled.ul<StyledListProps>`
   list-style-type: circle;

   li.list-item {
      padding: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.S} 0;
      white-space: nowrap;
   }
`;

interface ListProps extends Props<any> {
   title?: string;
   items?: string[];
}

const ListDefaultProps: ListProps = {};

const List: React.FC<ListProps> = ({ title, items }) => {
   return (
      <StyledList>
         {title && <h4>{title}</h4>}
         {items &&
            items.map(i => (
               <li key={i} className="list-item">
                  {i}
               </li>
            ))}
      </StyledList>
   );
};

export default withDefaultProps<ListProps>(List, ListDefaultProps);
