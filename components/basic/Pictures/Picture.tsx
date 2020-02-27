import React, { useMemo } from "react";
import styled from "styled-components";
import withComponentBase, { ComponentBaseProps } from "../../../helpers/withComponentBase";

interface StyledPictureProps {}

const StyledPicture = styled.img<StyledPictureProps>`
   max-width: 100%;
`;

export interface PictureProps extends ComponentBaseProps {
   src: any;
   webp?: any;
   srcType?: string;
}

export const PictureDefaultProps: PictureProps = {
   src: "#",
   srcType: "image/png"
};

const Picture: React.FC<PictureProps> = ({ src, className, style, srcType, webp }) => {
   const compiledSrc = useMemo(() => {
      if (typeof src === "string") return src;
      if (typeof src === "object" && src.hasOwnProperty("default")) return src.default;
   }, [src]);

   return (
      <picture>
         {webp && typeof webp === "string" && <source srcSet={webp} type="image/webp" />}
         <source srcSet={compiledSrc} type={srcType} />
         <StyledPicture style={style} className={className} src={compiledSrc} />
      </picture>
   );
};

export default withComponentBase<PictureProps>(Picture, PictureDefaultProps);
