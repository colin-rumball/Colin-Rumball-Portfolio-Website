import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import Picture, { PictureProps, PictureDefaultProps } from "./Picture";
import BorderedContentStyle from "../../../styles/BorderedContentStyle";
import useModalSystemHelper from "../../../hooks/useModalSystemHelper";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledEnhancedPictureProps {
   showBorder?: boolean;
   showInMobile?: boolean;
}

const WithPhoneMask = css`
   mask-image: url("public/images/uno/mask.png");
   mask-size: contain;
`;

const StyledEnhancedPicture = styled.figure<StyledEnhancedPictureProps>`
   margin: 0;

   &:hover {
      cursor: ${props => (props.onClick ? "pointer" : "auto")};
   }

   .enhanced-picture-container {
      display: flex;
      justify-content: center;

      img.enhanced-picture-inner {
         max-width: 563px;
         mask-repeat: no-repeat;
         mask-position: center;
         ${props => (props.showBorder ? BorderedContentStyle : null)};
         ${props => (props.showInMobile ? WithPhoneMask : null)};
      }
   }

   .mobile-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
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
   const { debug, className, style, showBorder, showInMobile, opensLightbox, pictureProps } = props;
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
      <StyledEnhancedPicture
         showBorder={showBorder}
         showInMobile={showInMobile}
         className={className}
         style={style}
      >
         <Picture
            {...pictureProps}
            onClick={opensLightbox ? onClickHandler : null}
            className="enhanced-picture-container"
            imgClassName={`enhanced-picture-inner ${pictureProps.className}`}
         />
         {showInMobile && (
            <div className="mobile-container">
               <Picture
                  src={require("public/images/uno/border.png")}
                  webp={require("public/images/uno/border.png?webp")}
               />
            </div>
         )}
      </StyledEnhancedPicture>
   );
};

export default withDefaultProps<EnhancedPictureProps>(EnhancedPicture, EnhancedPictureDefaultProps);
