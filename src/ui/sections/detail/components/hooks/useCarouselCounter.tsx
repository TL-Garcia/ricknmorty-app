import React from 'react';

const useCounter = (min = 0, max = 100, increment = 1) => {
  const [count, setCount] = React.useState(0);

  const increase = React.useCallback(() => {
    setCount((prev) => {
      const nextValue = prev + increment;
      const isOutOfBounds = nextValue > max;

      return isOutOfBounds ? min : nextValue;
    });
  }, [increment, min, max]);

  const decrease = React.useCallback(() => {
    setCount((prev) => {
      const nextValue = prev - increment;
      const isOutOfBounds = nextValue < min;

      return isOutOfBounds ? max : nextValue;
    });
  }, [increment, max, min]);

  return { count, increase, decrease };
};

export const useCarousel = (
  numberOfItems: number,
  listRef: React.RefObject<HTMLUListElement>
) => {
  const { count, increase, decrease } = useCounter(0, numberOfItems);
  const itemWidthRef = React.useRef<number>(0);

  React.useLayoutEffect(() => {
    const { current: listElement } = listRef;

    if (!listElement) {
      return;
    }

    const listItem = listElement.querySelector('li');

    if (!listItem) {
      return;
    }

    itemWidthRef.current = listItem.getBoundingClientRect().width;
  }, [listRef]);

  const moveRight = () => {
    increase();
    listRef.current?.scrollBy({ left: itemWidthRef.current });
  };

  const moveLeft = () => {
    decrease();
    listRef.current?.scrollBy({ left: -itemWidthRef.current });
  };

  return {
    moveLeft,
    moveRight,
    isOnLast: count === numberOfItems,
    isOnFirst: count === 0,
  };
};
