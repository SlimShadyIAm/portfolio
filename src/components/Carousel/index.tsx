import { RefObject, createRef, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import CarouselControl from './CarouselControl';

type Props = {
  images: string[];
};

const Carousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = images.reduce(
    (acc: { [key: number]: RefObject<HTMLDivElement> }, _, i) => {
      acc[i] = createRef();
      return acc;
    },
    {}
  );
  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  const scrollToImage = (i: number) => {
    setCurrentImage(i);

    refs[i].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  return (
    <>
      <div
        className={
          `scrollbar flex w-full snap-x snap-mandatory overflow-x-auto rounded-lg ${styles.carousel}`
        }
      >
        <CarouselControl
          isLeft
          handleNext={nextImage}
          handlePrevious={previousImage}
        />
        {images.map((img, i) => (
          <div
            className="flex w-full flex-shrink-0 snap-center justify-center"
            key={img}
            ref={refs[i]}
          >
            <Image
              priority
              quality={50}
              src={`/images/projects/${img}`}
              className="mb-2 max-h-96 w-auto max-w-full shrink-0 rounded-lg md:h-96"
              alt="Demo demo image"
              width={1000}
              height={530}
            />
          </div>
        ))}
        <CarouselControl
          handleNext={nextImage}
          handlePrevious={previousImage}
        />
      </div>
      <div className="mb-4 mt-2 flex flex-row justify-center gap-2 md:mb-0 md:mt-4">
        {images.map((_, i) => (
          <button
            className={`h-2.5 w-2.5 ${
              i === currentImage ? 'bg-slate-300/80' : 'bg-slate-300/30'
            } rounded-full transition-colors`}
            onClick={() => scrollToImage(i)}
            key={currentImage}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
