interface images {
  SMALL: string;
  DEFAULT: string;
}

export interface Artist {
  avatar: string;
  biography: string;
  company: string;
  createdAt: string;
  debutDate: string;
  id: string;
  images: images;
  isLiked: boolean;
  isVerify: boolean;
  name: string;
  stageName: string;
  totalLikes: number;
  totalSongs: number;
  type: number;
  updatedAt: string;
  urlSlug: string;
}