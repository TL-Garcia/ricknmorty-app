import useSWR from 'swr';
import { CharacterCarousel } from './components/CharacterCarousel';
import { CharacterSchema } from '../../../modules/characters/schema';
import { ErrorMessage } from '../error-message/ErrorMessage';
import { Loader } from '../loader/Loader';

interface DetailProps {
  title: string;
  subtitle: string;
  charactersURLs: string[];
}

const fetchCharacters = async (urls: string[]): Promise<CharacterSchema[]> => {
  return Promise.all<CharacterSchema>(
    urls.map(async (url) => (await fetch(url)).json())
  );
};

export const Detail = ({ title, subtitle, charactersURLs }: DetailProps) => {
  const {
    data: characters,
    isLoading,
    error,
  } = useSWR('characters', () => fetchCharacters(charactersURLs));

  if (characters) {
    return (
      <article>
        <p>{title}</p>
        <p>{subtitle}</p>
        <CharacterCarousel characters={characters} />
      </article>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }
};
