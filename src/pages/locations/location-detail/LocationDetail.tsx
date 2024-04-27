import { useParams } from 'react-router-dom';
import { Link } from '../../../ui/components/link/Link';
import { Detail } from '../../../ui/components/detail/Detail';
import { Loader } from '../../../ui/components/loader/Loader';
import { ErrorMessage } from '../../../ui/components/error-message/ErrorMessage';
import { useGetLocationDetail } from './hooks/useGetLocationDetail';

export const LocationDetail = () => {
  const { id } = useParams();
  const { data: location, error, isLoading } = useGetLocationDetail(id);

  if (location) {
    return (
      <>
        <Link href="/locations">Back</Link>
        {
          <Detail
            title={location.name}
            subtitle={location.dimension}
            charactersURLs={location.residents}
          />
        }
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
