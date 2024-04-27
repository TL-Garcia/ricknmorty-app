import React from 'react';
import { CharacterSchema } from '../../../../modules/characters/schema';
import './CharacterCarousel.scss';
import { useCarouselCounter } from './hooks/useCarouselCounter';

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
  const { count, decreaseCounter, increaseCounter } = useCarouselCounter(
    characters.length - 1
  );

  return (
    <div className="character-carousel">
      <a
        href={`#carousel-item-${count}`}
        onClick={decreaseCounter}
        className="character-carousel__button character-carousel__button--prev"
      >
        {'<'}
      </a>
      <ul
        className="character-carousel__content"
        style={{ '--carouselIndex': count } as React.CSSProperties}
      >
        {characters.map((character, index) => (
          <Character key={character.id} character={character} index={index} />
        ))}
      </ul>
      <a
        href={`#carousel-item-${count}`}
        onClick={increaseCounter}
        className="character-carousel__button character-carousel__button--next"
      >
        {'>'}
      </a>
    </div>
  );
};
