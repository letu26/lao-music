interface images {
  SMALL: string;
  DEFAULT: string;
}

interface artists {
  avatar: string;
  id: string;
  images: images;
  isVerify: boolean;
  name: string;
  stageName: string;
  type: number;
  typeInSong: number;
  urlSlug: string;
}

interface audios {
  id: string;
  type: number;
  url: string;
}

interface genres {
  id: string;
  name: string;
  type: number;
  urlSlug: string;
}

interface playlists {
  id: string;
  images: images;
  isPublic: boolean;
  name: string;
  type: number;
  urlSlug: string;
}

export interface SearchSong {
  artists: artists[];
  audios: audios[];
  createdAt: string;
  duration: string;
  genres: genres[];
  id: string;
  images: images;
  isLiked: false;
  keyColor: string;
  lrcLyrics: string;
  name: string;
  playlists: playlists[];
  totalInteractions: number;
  type: number;
  updatedAt: string;
  urlSlug: string;
}