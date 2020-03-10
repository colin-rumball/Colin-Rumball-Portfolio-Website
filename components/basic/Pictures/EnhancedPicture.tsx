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
   mobileOrientation?: "horizontal" | "vertical";
}

const StyledEnhancedPicture = styled.figure<StyledEnhancedPictureProps>`
   position: relative;
   margin: 0;

   &:hover {
      cursor: ${props => (props.onClick ? "pointer" : "auto")};
   }

   .enhanced-picture-container {
      display: flex;
      justify-content: center;

      img.enhanced-picture-inner {
         /* max-width: ${props => (props.mobileOrientation === "horizontal" ? "563px" : "318px")};
         max-height: ${props => (props.mobileOrientation === "horizontal" ? "318px" : "563px")}; */
         mask-repeat: no-repeat;
         mask-position: center;
         ${props => (props.showBorder ? BorderedContentStyle : null)};
         mask-image: ${props =>
            props.showInMobile
               ? props.mobileOrientation === "horizontal"
                  ? `url("public/images/common/horizontal-mobile-mask.png")`
                  : `url("public/images/common/vertical-mobile-mask.png")`
               : "none"};
         mask-size: contain;
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
   mobileOrientation?: "horizontal" | "vertical";
   opensLightbox?: boolean;
}

const EnhancedPictureDefaultProps: EnhancedPictureProps = {
   pictureProps: { ...PictureDefaultProps },
   mobileOrientation: "horizontal"
};

const EnhancedPicture: React.FC<EnhancedPictureProps> = props => {
   const {
      debug,
      className,
      style,
      showBorder,
      showInMobile,
      mobileOrientation,
      opensLightbox,
      pictureProps
   } = props;
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
         mobileOrientation={mobileOrientation}
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
               {mobileOrientation === "horizontal" ? (
                  <Picture
                     src={require("public/images/common/horizontal-mobile-border.png")}
                     webp={require("public/images/common/horizontal-mobile-border.png?webp")}
                  />
               ) : (
                  <img src="public/images/common/vertical-mobile-border.png" />
               )}
            </div>
         )}
      </StyledEnhancedPicture>
   );
};

export default withDefaultProps<EnhancedPictureProps>(EnhancedPicture, EnhancedPictureDefaultProps);
