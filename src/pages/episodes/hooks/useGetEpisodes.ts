import useSWR from 'swr';
import { APIResponse } from '../../../modules/__framework__/api/APIResponse';
import { EpisodeSchema } from '../../../modules/episode/schema';
import { fetcher } from '../../../modules/__framework__/api/hooks/useFetchFromAPI';

export type EpisodesAPIResponse = APIResponse<EpisodeSchema>;

const getEpisodes = () => fetcher<EpisodesAPIResponse>('episode');

export const useGetEpisodes = () => {
  return useSWR('episodes', getEpisodes);
};
