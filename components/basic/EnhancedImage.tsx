import React, { ReactElement, useCallback } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../helpers/withDefaultProps";
import useModalSystemHelper from "../../hooks/useModalSystemHelper";
import BorderedContentStyle from "../../styles/BorderedContentStyle";

interface StyledEnhancedImageProps {
   showBorder?: boolean;
}

const StyledEnhancedImage = styled.div<StyledEnhancedImageProps>`
   position: relative;
   margin: 0;

   &:hover {
      cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
   }

   display: flex;
   justify-content: center;

   img.enhanced-image-inner {
      ${(props) => (props.showBorder ? BorderedContentStyle : null)};
   }
`;

interface EnhancedImageProps extends ComponentBaseProps {
   showBorder?: boolean;
   opensLightbox?: boolean;
   image: ReactElement;
   imageClassName?: string;
}

const EnhancedImageDefaultProps: EnhancedImageProps = {
   image: null,
};

const EnhancedImage: React.FC<EnhancedImageProps> = (props) => {
   const { className, style, showBorder, opensLightbox, image, imageClassName } = props;
   const { pushModal } = useModalSystemHelper();

   const onClickHandler = useCallback(
      (e) => {
         if (opensLightbox)
            pushModal(
               <EnhancedImage
                  {...props}
                  showBorder={showBorder}
                  image={React.cloneElement(image, {
                     unsized: true,
                     width: undefined,
                     height: undefined,
                  })}
                  imageClassName="image-light-box"
                  opensLightbox={false}
               />
            );
      },
      [props]
   );

   return (
      <StyledEnhancedImage
         className={className}
         showBorder={showBorder}
         style={style}
         onClick={opensLightbox ? onClickHandler : null}
      >
         {React.cloneElement(image, { className: `${imageClassName} enhanced-image-inner` })}
      </StyledEnhancedImage>
   );
};

export default withDefaultProps<EnhancedImageProps>(EnhancedImage, EnhancedImageDefaultProps);
