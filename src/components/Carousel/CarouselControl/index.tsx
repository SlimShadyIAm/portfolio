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
      className={`absolute z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl text-white opacity-75 self-center ${
        isLeft ? 'left-8' : 'right-8'
      }`}
    >
      {isLeft ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};

export default CarouselControl;
