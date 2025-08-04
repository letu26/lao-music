export interface images{
  SMALL: string;
  DEFAULT: string;
}

export interface artists {
  createdAt: string;
  debutDate: string;
  id: string;
  images: images;
  isVerify: boolean;
  name: string;
  stageName: string;
  type: number;
  updatedAt: string;
  urlSlug: string;
}

export interface SongYTB {
  artists: artists[];
  duration: number;
  id: string;
  images: images;
  isLiked: boolean;
  keyColor: string;
  name: string;
  releaseDate: string;
  type: number;
  updatedAt: string;
  urlSlug: string;
}