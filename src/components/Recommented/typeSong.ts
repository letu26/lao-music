export interface SongData {
  id: string;
  name: string;
  urlSlug: string;
  duration: number;
  keyColor: string;
  isLiked: boolean;
  totalLikes: number;
  totalInteractions: number;
  type: number;
  createdAt: string;
  updatedAt: string;

  images: ImageSet;

  artists: Artist[];
  audios: Audio[];
  genres: Genre[];
  playlists: Playlist[];
}

export interface Artist {
  id: string;
  name: string;
  stageName: string;
  avatar: string;
  urlSlug: string;
  isVerify: boolean;
  type: number;
  typeInSong: number;
  images: ImageSet;
}

export interface Audio {
  id: string;
  type: number;
  url: string;
}

export interface Playlist {
  id: string;
  name: string;
  urlSlug: string;
  type: number;
  isPublic: boolean;
  images: ImageSet;
}

export interface ImageSet {
  SMALL: string;
  DEFAULT: string;
}

export interface Genre {
}

