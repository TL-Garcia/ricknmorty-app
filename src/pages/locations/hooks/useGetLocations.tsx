import useSWR from 'swr';
import { APIResponse } from '../../../modules/__framework__/api/APIResponse';

export type LocationSchema = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string; // URL to the episode detail endpoint
  created: string; // Time at which the episode was created in the database.
};

type LocationsAPIResponse = APIResponse<LocationSchema>;

const getLocations = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/location');
  const jsonResponse: LocationsAPIResponse = await response.json();

  return jsonResponse.results;
};

export const useGetLocations = () => {
  return useSWR('locations', getLocations);
};
