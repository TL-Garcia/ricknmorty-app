import React from 'react';

const DEFAULT_INCREMENT = 3;

export const useCarouselCounter = (
  maxLength: number,
  increment = DEFAULT_INCREMENT
) => {
  const [count, setCount] = React.useState(0);

  const decreaseCounter = () => {
    setCount((prev) => {
      const nextValue = prev - increment;
      const isOutOfBounds = nextValue < 0;

      return isOutOfBounds ? maxLength : nextValue;
    });
  };

  const increaseCounter = () =>
    setCount((prev) => {
      const nextValue = prev + DEFAULT_INCREMENT;
      const isOutOfBounds = nextValue > maxLength;

      return isOutOfBounds ? 0 : nextValue;
    });

  return { count, decreaseCounter, increaseCounter };
};
