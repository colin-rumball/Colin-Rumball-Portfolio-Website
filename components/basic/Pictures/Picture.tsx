import React, { useMemo, MouseEventHandler, CSSProperties } from "react";
import styled from "styled-components";
import { ComponentBaseProps } from "../../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../../helpers/withDefaultProps";

interface StyledPictureProps {}

const StyledPicture = styled.img<StyledPictureProps>`
   max-width: 100%;

   &:hover {
      cursor: ${props => (props.onClick ? "pointer" : "auto")};
   }
`;

export interface PictureProps extends ComponentBaseProps {
   src: any;
   imgClassName?: string;
   imgStyle?: CSSProperties;
   alt?: string;
   webp?: any;
   srcType?: string;
   onClick?: MouseEventHandler<any>;
}

export const PictureDefaultProps: PictureProps = {
   src: "#",
   alt: "default picture",
   srcType: "image/png"
};

const Picture: React.FC<PictureProps> = ({
   src,
   alt,
   className,
   imgClassName,
   imgStyle,
   style,
   srcType,
   webp,
   onClick
}) => {
   const compiledSrc = useMemo(() => {
      if (typeof src === "string") return src;
      if (typeof src === "object" && src.hasOwnProperty("default")) return src.default;
   }, [src]);

   return (
      <picture className={className} style={style}>
         {webp && typeof webp === "string" && <source srcSet={webp} type="image/webp" />}
         <source srcSet={compiledSrc} type={srcType} />
         <StyledPicture
            className={imgClassName}
            style={imgStyle}
            src={compiledSrc}
            alt={alt}
            onClick={onClick}
         />
      </picture>
   );
};

export default withDefaultProps<PictureProps>(Picture, PictureDefaultProps);
