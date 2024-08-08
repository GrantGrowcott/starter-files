import { useState, useEffect, useCallback } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "../css/ImageSlider.css";
import styles from "../styles/ImageSliderStyles";


type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const showNextImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }, [images]);

  const showPrevImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }, [images]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isHovered) {
      intervalId = setInterval(showNextImage, 5000);
    }

    return () => clearInterval(intervalId);
  }, [isHovered, showNextImage, showPrevImage]);

  return (
    <section
      aria-label="Image Slider"
      style={styles.imgContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div style={styles.imgInnerContainer}>
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={styles.leftArrow}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button onClick={showNextImage} className="img-slider-btn" style={styles.rightArrow} aria-label="View Next Image">
        <ArrowBigRight aria-hidden />
      </button>
      <div style={styles.sliderContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
