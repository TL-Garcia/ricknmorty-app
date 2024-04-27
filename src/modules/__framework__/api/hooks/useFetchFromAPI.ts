export const fetcher = async <TData>(
  resource: ResourceType,
  id = ''
): Promise<TData> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/${resource}/${id}`
  );
  const jsonResponse = await response.json();

  return jsonResponse;
};

type ResourceType = 'episode' | 'character' | 'location';
