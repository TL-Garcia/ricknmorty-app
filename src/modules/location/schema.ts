export type LocationSchema = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string; // URL to the episode detail endpoint
  created: string; // Time at which the episode was created in the database.
};
