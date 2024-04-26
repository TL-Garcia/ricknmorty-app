import useSWR from 'swr';

type APIResponse<TResponse> = {
  info: {
    count: number;
    pages: number;
    next: string; // URL for next page
    prev: string; // URL for prev page
  };
  results: TResponse[];
};

export type EpisodeSchema = {
  id: number;
  name: string;
  air_date: string;
  episode: string; // The code of the episode. Ex: S01E01
  characters: string[]; // Characters present in the episode
  url: string; // URL to the episode detail endpoint
  created: string; // Time at which the episode was created in the database.
};

type EpisodesAPIResponse = APIResponse<EpisodeSchema>;

const getEpisodes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const jsonResponse: EpisodesAPIResponse = await response.json();

  return jsonResponse.results;
};

export const useGetEpisodes = () => {
  return useSWR('episodes', getEpisodes);
};
