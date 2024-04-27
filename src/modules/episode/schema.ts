export type EpisodeSchema = {
  id: number;
  name: string;
  air_date: string;
  episode: string; // The code of the episode. Ex: S01E01
  characters: string[]; // Characters present in the episode
  url: string; // URL to the episode detail endpoint
  created: string; // Time at which the episode was created in the database.
};
