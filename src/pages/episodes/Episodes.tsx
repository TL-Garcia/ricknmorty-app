import { InfoCardList } from '../../ui/components/info-card/InfoCardList';
import { InfoItem } from '../../ui/components/info-card/types';
import './Episodes.scss';
import { Loader } from '../../ui/components/loader/Loader';
import { ErrorMessage } from '../../ui/components/error-message/ErrorMessage';
import { useGetEpisodes } from './hooks/useGetEpisodes';
import { EpisodeSchema } from '../../modules/episode/schema';

const episodesToInfoItems = (episode: EpisodeSchema): InfoItem => ({
  title: episode.name,
  type: episode.episode,
  detail: new Date(episode.created).toDateString(),
  id: String(episode.id),
});

export default function Episodes() {
  const { data, error, isLoading } = useGetEpisodes();

  if (data) {
    return (
      <InfoCardList
        items={data.results.map(episodesToInfoItems)}
        type="episodes"
      />
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }
}
