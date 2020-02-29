import React, { Props } from "react";
import styled from "styled-components";
import { ThemeContainer } from "../../themes/definitions/Theme";
import FeaturedContentStyle from "../../styles/FeaturedContentStyle";
import { string } from "yargs";
import { ComponentBaseProps } from "../../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../../helpers/withDefaultProps";

interface StyledFeaturedVideoProps {}

const StyledFeaturedVideo = styled.video<StyledFeaturedVideoProps>`
   ${FeaturedContentStyle};
`;

interface FeaturedVideoProps extends ComponentBaseProps {
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
