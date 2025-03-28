export interface CollabInfo {
  name: string;
  profileImage: string;
  description: string;
}

export interface FaqInfo {
  question: string;
  answer: string;
}

export interface ProductInfo {
  title: string;
  description: string;
  image?: string;
  price: number;
}
