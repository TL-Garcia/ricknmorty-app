import useSWR from 'swr';

const fetcher = (...args: unknown[]) =>
  fetch(...args).then((res) => res.json());

export const useFetch = (endpoint: string) => {
  return useSWR(endpoint, fetcher);
};
