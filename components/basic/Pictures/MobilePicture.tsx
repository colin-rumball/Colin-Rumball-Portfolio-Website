import React from "react";
import styled from "styled-components";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";
import Picture, { PictureProps, PictureDefaultProps } from "./Picture";

interface StyledMobilePictureProps {}

const StyledMobilePicture = styled.figure<StyledMobilePictureProps>`
   margin: 10px;
`;

interface MobilePictureProps extends ComponentBaseProps {
   pictureProps: PictureProps;
}

const MobilePictureDefaultProps: MobilePictureProps = {
   pictureProps: { ...PictureDefaultProps }
};

const MobilePicture: React.FC<MobilePictureProps> = ({ className, style, pictureProps }) => {
   return (
      <StyledMobilePicture className={className} style={style}>
         <Picture {...pictureProps} />
      </StyledMobilePicture>
   );
};

export default withComponentBase<MobilePictureProps>(MobilePicture, MobilePictureDefaultProps);
