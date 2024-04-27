import useSWR from 'swr';
import { fetcher } from '../../../../modules/__framework__/api/hooks/useFetchFromAPI';
import { EpisodeSchema } from '../../../../modules/episode/schema';

const getEpisodeDetail = (id: string) => fetcher<EpisodeSchema>('episode', id);

export const useGetEpisodeDetail = (id: string) => {
  return useSWR('episode-detail', () => getEpisodeDetail(id));
};
