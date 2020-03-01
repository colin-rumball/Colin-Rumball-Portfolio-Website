import React, { useCallback } from "react";
import styled from "styled-components";
import Picture, { PictureProps, PictureDefaultProps } from "./Picture";
import BorderedContentStyle from "../../../styles/BorderedContentStyle";
import useModalSystemHelper from "../../../hooks/useModalSystemHelper";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledEnhancedPictureProps {
   showBorder?: boolean;
}

const StyledEnhancedPicture = styled.figure<StyledEnhancedPictureProps>`
   margin: 0;

   &:hover {
      cursor: ${props => (props.onClick ? "pointer" : "auto")};
   }

   img.enhanced-picture-inner {
      ${props => (props.showBorder ? BorderedContentStyle : null)};
   }
`;

interface EnhancedPictureProps extends ComponentBaseProps {
   pictureProps: PictureProps;
   showBorder?: boolean;
   showInMobile?: boolean;
   opensLightbox?: boolean;
}

const EnhancedPictureDefaultProps: EnhancedPictureProps = {
   pictureProps: { ...PictureDefaultProps }
};

const EnhancedPicture: React.FC<EnhancedPictureProps> = props => {
   const { debug, className, style, showBorder, opensLightbox, pictureProps } = props;
   const { pushModal } = useModalSystemHelper();

   const onClickHandler = useCallback(
      e => {
         if (opensLightbox)
            pushModal(
               <EnhancedPicture
                  {...props}
                  pictureProps={{ ...pictureProps, onClick: null }}
                  opensLightbox={false}
               />
            );
         if (pictureProps.onClick) pictureProps.onClick(e);
      },
      [props]
   );

   return (
      <StyledEnhancedPicture showBorder={showBorder} className={className} style={style}>
         <Picture
            {...pictureProps}
            onClick={opensLightbox ? onClickHandler : null}
            className={`enhanced-picture-inner ${pictureProps.className}`}
         />
      </StyledEnhancedPicture>
   );
};

export default withDefaultProps<EnhancedPictureProps>(EnhancedPicture, EnhancedPictureDefaultProps);
