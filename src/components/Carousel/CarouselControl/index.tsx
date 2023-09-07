import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

type Props = {
  isLeft?: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
};

const CarouselControl = ({
  isLeft = false,
  handleNext,
  handlePrevious,
}: Props) => {
  return (
    <button
      type="button"
      onClick={!isLeft ? handleNext : handlePrevious}
      className={`absolute z-10 flex h-10 w-10 items-center justify-center self-center rounded-full bg-black text-sm text-white opacity-75 md:text-2xl ${
        isLeft ? 'left-2 md:left-8' : 'right-2 md:right-8'
      }`}
    >
      {isLeft ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};

export default CarouselControl;
