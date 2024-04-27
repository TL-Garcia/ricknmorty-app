import { useGetLocations } from './hooks/useGetLocations';
import { InfoCardList } from '../../ui/components/info-card/InfoCardList';
import { InfoItem } from '../../ui/components/info-card/types';
import { Loader } from '../../ui/components/loader/Loader';
import { ErrorMessage } from '../../ui/components/error-message/ErrorMessage';
import { LocationSchema } from '../../modules/location/schema';

const locationsToInfoItems = (location: LocationSchema): InfoItem => ({
  title: location.name,
  type: location.dimension,
  detail: location.type,
  id: String(location.id),
});

export default function Locations() {
  const { data, error, isLoading } = useGetLocations();

  if (data) {
    return (
      <InfoCardList
        items={data.results.map(locationsToInfoItems)}
        type="locations"
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
