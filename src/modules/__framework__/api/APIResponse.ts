export type APIResponse<TResponse> = {
  info: {
    count: number;
    pages: number;
    next: string; // URL for next page
    prev: string; // URL for prev page
  };
  results: TResponse[];
};
