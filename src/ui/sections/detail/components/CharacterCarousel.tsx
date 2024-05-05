import React from 'react';
import { CharacterSchema } from '../../../../modules/characters/schema';
import './CharacterCarousel.scss';
import { useCarousel } from './hooks/useCarouselCounter';

interface CharacterCarouselProps {
  characters: CharacterSchema[];
}

interface CharacterProps {
  character: CharacterSchema;
  index: number;
}

const Character = ({ character, index }: CharacterProps) => {
  return (
    <li key={character.id} className="character" id={`carousel-item-${index}`}>
      <img src={character.image} className="character__avatar" />
      <p className="character__name">{character.name}</p>
    </li>
  );
};

export const CharacterCarousel = ({ characters }: CharacterCarouselProps) => {
  const listRef = React.useRef(null);
  const { isOnLast, isOnFirst, moveRight, moveLeft } = useCarousel(
    characters.length - 1,
    listRef
  );

  return (
    <div className="character-carousel">
      <button
        aria-hidden
        onClick={moveLeft}
        className={`character-carousel__button character-carousel__button--prev ${isOnFirst && 'hidden'}`}
      >
        {'<'}
      </button>
      <ul ref={listRef} className="character-carousel__content">
        {characters.map((character, index) => (
          <Character key={character.id} character={character} index={index} />
        ))}
      </ul>
      <button
        aria-hidden
        onClick={moveRight}
        className={`character-carousel__button character-carousel__button--next ${isOnLast && 'hidden'}`}
      >
        {'>'}
      </button>
    </div>
  );
};
