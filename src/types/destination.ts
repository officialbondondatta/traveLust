export interface Destination {
  _id?: string;
  destination: string;
  country: string;
  category: "Beach" | "Mountain" | "City" | "Adventure";
  price: number | string;
  duration: string;
  departure: string;
  image: string;
  description: string;
  highlights?: string[];
  rating?: number;
  reviewCount?: number;
  inclusions?: string[];
}
