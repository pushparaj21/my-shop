export type CategoryType = {
  image: string;
  name: string;
  id: number;
  slug: string;
};
export type ProductType = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  images: string[];
};
