import useSWR from 'swr';
import { CharacterCarousel } from './components/CharacterCarousel';
import { CharacterSchema } from '../../../modules/characters/schema';
import { ErrorMessage } from '../../components/error-message/ErrorMessage';
import { Loader } from '../../components/loader/Loader';
import './Detail.scss';

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
      <article className="detail">
        <header className="detail__header">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </header>
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
