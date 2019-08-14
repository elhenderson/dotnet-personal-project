export interface Song {
  id: number;
  title: string;
  artist?: string;
  sampleArtist?: string;
  saved?: boolean;
  image?: string;
}
