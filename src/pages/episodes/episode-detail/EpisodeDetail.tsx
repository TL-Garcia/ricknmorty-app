import { useParams } from 'react-router-dom';
import { Detail } from '../../../ui/components/detail/Detail';
import { Loader } from '../../../ui/components/loader/Loader';
import { ErrorMessage } from '../../../ui/components/error-message/ErrorMessage';
import { useGetEpisodeDetail } from './hooks/useGetEpisodeDetail';

export const EpisodeDetail = () => {
  const { id } = useParams();
  const { data: episode, isLoading, error } = useGetEpisodeDetail(id as string);

  if (episode) {
    return (
      <>
        <Detail
          title={episode.name}
          subtitle={episode.episode}
          charactersURLs={episode.characters}
        />
      </>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }
};
