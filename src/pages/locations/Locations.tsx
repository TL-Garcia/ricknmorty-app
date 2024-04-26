import { InfoCardList } from '../../components/info-card/InfoCardList';
import { InfoItem } from '../../components/info-card/types';
import { LocationSchema, useGetLocations } from './hooks/useGetLocations';

const locationsToInfoItems = (location: LocationSchema): InfoItem => ({
  title: location.name,
  type: location.dimension,
  detail: location.type,
});

export default function Locations() {
  const { data, error, isLoading } = useGetLocations();

  if (isLoading) {
    return '...';
  }

  if (error) {
    return 'error';
  }

  return data && <InfoCardList items={data.map(locationsToInfoItems)} />;
}
