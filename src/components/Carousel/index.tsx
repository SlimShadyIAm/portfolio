import { RefObject, createRef, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

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
  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
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
    // First let's set the index of the image we want to see next
    setCurrentImage(i);

    refs[i].current?.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  const sliderControl = (isLeft: boolean) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
        <div className={styles.carousel}>
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <Image
                src={`/images/projects/${img}`}
                className="w-full object-contain"
                alt="Demo demo image"
                width={1000}
                height={530}
              />
            </div>
          ))}
          {sliderControl(false)}
        </div>
  );
};

export default Carousel;
