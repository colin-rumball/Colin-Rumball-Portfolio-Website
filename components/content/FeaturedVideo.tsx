import React, { Props } from "react";
import styled from "styled-components";
import withDefaultProps from "../../helpers/withDefaultProps";
import { ThemeContainer } from "../../themes/definitions/Theme";
import FeaturedContentStyle from "../../styles/FeaturedContentStyle";

interface StyledFeaturedVideoProps {}

const StyledFeaturedVideo = styled.video<StyledFeaturedVideoProps>`
   ${FeaturedContentStyle};
`;

interface FeaturedVideoProps extends Props<any> {
   src: string;
   srcType?: string;
}

const FeaturedVideoDefaultProps: FeaturedVideoProps = {
   src: "#",
   srcType: "video/mp4"
};

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ src, srcType }) => {
   return (
      <StyledFeaturedVideo autoPlay loop muted playsInline>
         <source src={src} type={srcType} />
      </StyledFeaturedVideo>
   );
};

export default withDefaultProps<FeaturedVideoProps>(FeaturedVideo, FeaturedVideoDefaultProps);
