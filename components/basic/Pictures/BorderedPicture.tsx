import React from "react";
import styled from "styled-components";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";
import FeaturedContentStyle from "../../../styles/FeaturedContentStyle";
import Picture, { PictureProps, PictureDefaultProps } from "./Picture";

interface StyledBorderedPictureProps {}

const StyledBorderedPicture = styled.figure<StyledBorderedPictureProps>`
   margin: 0;
   img.inner-imager {
      ${FeaturedContentStyle};
   }
`;

interface BorderedPictureProps extends ComponentBaseProps {
   pictureProps: PictureProps;
}

const BorderedPictureDefaultProps: BorderedPictureProps = {
   pictureProps: { ...PictureDefaultProps }
};

const BorderedPicture: React.FC<BorderedPictureProps> = ({ className, style, pictureProps }) => {
   return (
      <StyledBorderedPicture className={className} style={style}>
         <Picture {...pictureProps} className={`inner-imager ${pictureProps.className}`} />
      </StyledBorderedPicture>
   );
};

export default withComponentBase<BorderedPictureProps>(
   BorderedPicture,
   BorderedPictureDefaultProps
);
