import { Lineup } from './lineup';

export interface User {
  id: number;
  username: string;
  weddingDate?: string;
  venue?: string;
  street?: string;
  city?: string;
  savedSongs?: string;
  lineup?: Lineup[];
}

