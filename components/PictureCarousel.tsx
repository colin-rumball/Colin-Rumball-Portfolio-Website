import React from "react";
import styled from "styled-components";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/js/swiper.esm";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";
import EnhancedPicture from "./basic/Pictures/EnhancedPicture";
import Picture from "./basic/Pictures/Picture";

interface StyledPictureCarouselProps {}

const StyledPictureCarousel = styled.section<StyledPictureCarouselProps>`
   position: relative;
   width: 100vw;

   left: calc(50% - 1px);
   right: 50%;
   margin-left: -50vw;
   margin-right: -50vw;

   .swiper-slide {
      transform: scale(0.9);
      transition: transform 0.3s ease-out;

      &.swiper-slide-actives {
         transform: scale(1);
         mask-image: url("public/images/uno/mask.png");
      }
   }
   .swiper-slide-actives {
      transform: scale(1);
      mask-image: url("public/images/uno/mask.png");
      mask-size: contain;
   }
`;

interface PictureCarouselProps extends ComponentBaseProps {}

const PictureCarouselDefaultProps: PictureCarouselProps = {};

const PictureCarousel: React.FC<PictureCarouselProps> = ({}) => {
   const params = {
      // Provide Swiper class as props
      Swiper,
      // Add modules you need
      modules: [Pagination],
      pagination: {
         el: ".swiper-pagination",
         type: "bullets",
         clickable: true
      },
      centeredSlides: true,
      slidesPerView: 3
   };

   return (
      <StyledPictureCarousel>
         <ReactIdSwiperCustom {...params}>
            <span>
               <EnhancedPicture
                  showInMobile
                  pictureProps={{
                     src: require("public/images/uno/uno-horizontal.png"),
                     webp: require("public/images/uno/uno-horizontal.png?webp")
                  }}
               />
            </span>
            <span>
               <Picture
                  src={require("public/images/uno/uno-horizontal.png")}
                  webp={require("public/images/uno/uno-horizontal.png?webp")}
               />
            </span>
            <span>
               <Picture
                  src={require("public/images/uno/uno-horizontal.png")}
                  webp={require("public/images/uno/uno-horizontal.png?webp")}
               />
            </span>
            <span>
               <Picture
                  src={require("public/images/uno/uno-horizontal.png")}
                  webp={require("public/images/uno/uno-horizontal.png?webp")}
               />
            </span>
            <span>
               <Picture
                  src={require("public/images/uno/uno-horizontal.png")}
                  webp={require("public/images/uno/uno-horizontal.png?webp")}
               />
            </span>
            <span>
               <Picture
                  src={require("public/images/uno/uno-horizontal.png")}
                  webp={require("public/images/uno/uno-horizontal.png?webp")}
               />
            </span>
         </ReactIdSwiperCustom>
      </StyledPictureCarousel>
   );
};

export default withDefaultProps<PictureCarouselProps>(PictureCarousel, PictureCarouselDefaultProps);
