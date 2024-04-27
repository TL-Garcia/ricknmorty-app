import useSWR from 'swr';
import { APIResponse } from '../../../modules/__framework__/api/APIResponse';
import { fetcher } from '../../../modules/__framework__/api/hooks/useFetchFromAPI';
import { LocationSchema } from '../../../modules/location/schema';

type LocationsAPIResponse = APIResponse<LocationSchema>;

const getLocations = async () => fetcher<LocationsAPIResponse>('location');

export const useGetLocations = () => {
  return useSWR('locations', getLocations);
};
