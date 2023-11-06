"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface Props {
  images: { src: StaticImageData; alt: string }[];
  play: boolean;
}

const ImageSlider = ({ images, play }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      if (play) {
        setImageIndex((_imageIndex) => {
          if (_imageIndex < images.length - 1) return _imageIndex + 1;
          return 0;
        });
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [images.length, play]);

  return (
    <div className="flex overflow-hidden">
      {images.map((image) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          style={{ translate: `${-100 * imageIndex}%` }}
          className="transition-all duration-300 ease-in-out"
        />
      ))}
    </div>
  );
};

export default ImageSlider;
