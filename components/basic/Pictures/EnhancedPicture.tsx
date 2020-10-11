import React, { ReactElement, useCallback } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";
import useModalSystemHelper from "../../../hooks/useModalSystemHelper";
import BorderedContentStyle from "../../../styles/BorderedContentStyle";
import Picture, { PictureDefaultProps, PictureProps } from "./Picture";

interface StyledEnhancedPictureProps {
   showBorder?: boolean;
}

const StyledEnhancedPicture = styled.div<StyledEnhancedPictureProps>`
   position: relative;
   margin: 0;

   &:hover {
      cursor: ${props => (props.onClick ? "pointer" : "auto")};
   }

   .enhanced-picture-container {
      display: flex;
      justify-content: center;

      img.enhanced-picture-inner {
         ${props => (props.showBorder ? BorderedContentStyle : null)};
      }
   }
`;

interface EnhancedPictureProps extends ComponentBaseProps {
   pictureProps: PictureProps;
   showBorder?: boolean;
   opensLightbox?: boolean;
}

const EnhancedPictureDefaultProps: EnhancedPictureProps = {
   pictureProps: { ...PictureDefaultProps }
};

const EnhancedPicture: React.FC<EnhancedPictureProps> = props => {
   const { debug, className, style, showBorder, opensLightbox, pictureProps, caption } = props;
   const { pushModal } = useModalSystemHelper();

   const onClickHandler = useCallback(
      e => {
         if (opensLightbox)
            pushModal(
               <EnhancedPicture
                  {...props}
                  pictureProps={{
                     ...pictureProps,
                     onClick: null,
                     imgStyle: { maxHeight: "90vh" }
                  }}
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
            className="enhanced-picture-container"
            imgClassName={`enhanced-picture-inner ${pictureProps.className}`}
         />
      </StyledEnhancedPicture>
   );
};

export default withDefaultProps<EnhancedPictureProps>(EnhancedPicture, EnhancedPictureDefaultProps);
