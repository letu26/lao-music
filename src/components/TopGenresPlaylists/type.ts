export  interface images {
  SMALL: string;
  DEFAULT: string;
};

export interface parentGenreDto{
  id: string;
  images: images;
  name: string;
  type: number;
  urlSlug: string;
}

export interface playlists {
  id: string;
  createdAt: string;
  images: images;
  isPublic: boolean;
  name: string;
  type: number;
  updatedAt: string;
  urlSlug: string;
}

export interface TopGenres{
  id: string;
  createdAt: string;
  images: images;
  name: string;
  parentGenreDto: parentGenreDto;
  playlists: playlists[];
  type: number;
  updatedAt: string;
  urlSlug: string
}