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
      <div className={styles.carousel + ' rounded-lg'}>
        <CarouselControl
          isLeft
          handleNext={nextImage}
          handlePrevious={previousImage}
        />
        {images.map((img, i) => (
          <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
            <Image
              src={`/images/projects/${img}`}
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
      <div className="flex flex-row justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            className={`h-2.5 w-2.5 ${
              i === currentImage ? 'bg-slate-300/80' : 'bg-slate-300/30'
            } rounded-full transition-colors`}
            onClick={() => scrollToImage(i)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
