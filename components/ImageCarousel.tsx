import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import withComponentBase, { ComponentBaseProps } from "../helpers/withComponentBase";
import Picture from "./basic/Pictures/Picture";
import { ThemeContainer } from "../themes/definitions/Theme";

interface StyledImageCarouselProps {}

const StyledImageCarousel = styled(Slider)<StyledImageCarouselProps>`
   padding-bottom: 50px;

   .slick-slide {
      transition: transform 0.4s ease-out;
      transform: scale(0.9);
   }

   .slick-center {
      transform: scale(1);
   }

   ul.slick-dots {
      bottom: 15px;
      width: 100%;
      margin: 0;
      list-style: none;
      text-align: center;

      li {
         width: 30px;

         button {
            width: 30px;

            &::before {
               opacity: 0.8;
               width: 30px;
               font-size: 20px;
               color: rgba(255, 255, 255, 0.2);
               transform: scale(0.9);
               transition: transform 0.4s ease-out, opacity 0.35s ease-in-out;
            }
         }

         &.slick-active {
            button {
               &::before {
                  opacity: 1;
                  color: #f0b817;
                  transform: scale(1);
               }
            }
         }
      }
   }
`;

interface ImageCarouselProps extends ComponentBaseProps {}

const ImageCarouselDefaultProps: ImageCarouselProps = {};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ className, style, children }) => {
   return (
      <StyledImageCarousel
         className={className}
         style={style}
         arrows={false}
         adaptiveHeight
         dots
         dotsClass="slick-dots"
         focusOnSelect
         centerMode
         swipeToSlide
         slidesToShow={1}
      >
         {children}
      </StyledImageCarousel>
   );
};

export default withComponentBase<ImageCarouselProps>(ImageCarousel, ImageCarouselDefaultProps);
