import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import { ThemeContainer } from "../themes/definitions/Theme";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Pagination } from "swiper";

interface StyledPictureCarouselProps {}

const StyledPictureCarousel = styled.div<StyledPictureCarouselProps>`
   .swiper-slide {
      transition: transform 0.4s ease-out, opacity 0.35s ease-out, filter 0.3s ease-out;
      transform: scale(0.95);
      opacity: 0.8;
      filter: blur(2px);

      &.swiper-slide-active {
         opacity: 1;
         filter: blur(0px);

         @media (min-width: ${({ theme }: ThemeContainer) => theme.VARIABLES.BREAK_POINTS.MEDIUM}) {
            transform: scale(1);
         }
      }
   }

   .swiper-container {
      height: 100%;

      .swiper-wrapper {
         padding-bottom: ${({ theme }: ThemeContainer) => theme.VARIABLES.SPACING.M};
      }
   }

   .swiper-pagination {
      position: relative;
      bottom: 0;

      span.swiper-pagination-bullet {
         background: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.NEUTRALS.BASE};
         opacity: 0.8;
         transform: scale(0.65);
         transition: transform 0.4s ease-out, opacity 0.35s ease-in-out, background 0.15s ease-in;

         width: 20px;
         height: 20px;

         &.swiper-pagination-bullet-active {
            opacity: 1;
            background: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.PRIMARY.BASE};
            transform: scale(1);
         }
      }
   }
`;

interface PictureCarouselProps extends ComponentBaseProps {}

const PictureCarouselDefaultProps: PictureCarouselProps = {};

const PictureCarousel: React.FC<PictureCarouselProps> = ({ className, style, children }) => {
   return (
      <StyledPictureCarousel className={className} style={style}>
         <Swiper
            pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true }}
            centeredSlides={true}
            slidesPerView={1}
            slideToClickedSlide={true}
            loop={true}
            breakpoints={{ 768: { slidesPerView: 3 } }}
         >
            {React.Children.map(children, (child) => (
               <SwiperSlide>{child}</SwiperSlide>
            ))}
         </Swiper>
      </StyledPictureCarousel>
   );
};

export default withDefaultProps<PictureCarouselProps>(PictureCarousel, PictureCarouselDefaultProps);
