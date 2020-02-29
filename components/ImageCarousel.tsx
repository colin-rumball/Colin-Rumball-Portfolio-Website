import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { ThemeContainer } from "../themes/definitions/Theme";
import { ComponentBaseProps } from "../helpers/utils/ComponentBaseProps";
import withDefaultProps from "../helpers/withDefaultProps";

interface StyledImageCarouselProps {}

const StyledImageCarousel = styled(Slider)<StyledImageCarouselProps>`
   background-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.DARK_GREY};
   padding-bottom: 50px;
   border: 2px solid;
   border-color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.TAN};
   border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.STRONG};

   .slick-list {
      background: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.DARK_GREY};
      border-radius: ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.STRONG}
         ${({ theme }: ThemeContainer) => theme.VARIABLES.BORDER_RADIUS.STRONG} 0 0;
   }

   .slick-slide {
      transition: transform 0.4s ease-out, opacity 0.35s ease-out, filter 0.3s ease-out;
      transform: scale(0.9);
      opacity: 0.7;
      filter: blur(2px);
   }

   .slick-center {
      transform: scale(1);
      opacity: 1;
      filter: blur(0px);
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
                  color: ${({ theme }: ThemeContainer) => theme.VARIABLES.COLORS.TAN};
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

export default withDefaultProps<ImageCarouselProps>(ImageCarousel, ImageCarouselDefaultProps);
