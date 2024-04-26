import { useFetch } from '../../core/__framework__/fetch/useFetch';

export default function Episodes() {
  const { data, error, isLoading } = useFetch(
    'https://rickandmortyapi.com/api/episode'
  );

  if (isLoading) {
    return '...';
  }

  if (error) {
    return 'error';
  }

  console.log(data);
  return (
    <>
      <h2>Episodes</h2>
      {data.results.map((r) => r.name)}
    </>
  );
}
