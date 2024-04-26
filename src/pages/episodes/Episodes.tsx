import { InfoCardList } from '../../ui/components/info-card/InfoCardList';
import { InfoItem } from '../../ui/components/info-card/types';
import './Episodes.scss';
import { EpisodeSchema, useGetEpisodes } from './hooks/useGetEpisodes';

const episodesToInfoItems = (episode: EpisodeSchema): InfoItem => ({
  title: episode.name,
  type: episode.episode,
  detail: new Date(episode.created).toDateString(),
});

export default function Episodes() {
  const { data, error, isLoading } = useGetEpisodes();

  if (isLoading) {
    return '...';
  }

  if (error) {
    return 'error';
  }

  return data && <InfoCardList items={data.map(episodesToInfoItems)} />;
}
