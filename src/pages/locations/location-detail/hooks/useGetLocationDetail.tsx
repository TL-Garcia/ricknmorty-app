import useSWR from 'swr';
import { fetcher } from '../../../../modules/__framework__/api/hooks/useFetchFromAPI';
import { LocationSchema } from '../../../../modules/location/schema';

const getLocationDetail = (id: string) =>
  fetcher<LocationSchema>('location', id);

export const useGetLocationDetail = (id: string) => {
  return useSWR('location-detail', () => getLocationDetail(id));
};
