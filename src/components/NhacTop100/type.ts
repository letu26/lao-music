export interface SongTop100 {
  artists: Artists[];
  id: string;
  createdAt: string;
  images: Images;
  isPublic: boolean;
  name: string;
  type: number;
  updatedAt: string;
  urlSlug: string
}

export interface Artists{
  avatar: string;
  debutDate: string;
  id: string;
  images: Images;
  isVerify: boolean;
  name: string;
  type: number;
  urlSlug: string;
}

export interface Images{
  SMALL: string;
  DEFAULT: string;
}