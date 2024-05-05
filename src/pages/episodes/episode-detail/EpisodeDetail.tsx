import { useParams } from 'react-router-dom';
import { Detail } from '../../../ui/sections/detail/Detail';
import { Loader } from '../../../ui/components/loader/Loader';
import { ErrorMessage } from '../../../ui/components/error-message/ErrorMessage';
import { useGetEpisodeDetail } from './hooks/useGetEpisodeDetail';
import { CommentForm } from './components/Form/Form';
import { Link } from '../../../ui/components/link/Link';
import './EpisodeDetail.scss';

export const EpisodeDetail = () => {
  const { id } = useParams();
  const { data: episode, isLoading, error } = useGetEpisodeDetail(id as string);

  if (episode) {
    return (
      <div className="episode-detail">
        <Detail
          title={episode.name}
          subtitle={episode.episode}
          charactersURLs={episode.characters}
        />
        <CommentForm />
        <Link href={'..'}>Back</Link>
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }
};
