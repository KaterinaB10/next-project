import { fetchProduct } from "./fetchProduct";

export const fetchPopularProducts = async (): Promise<IProduct[]> => {
  const products: IProduct[] = await fetchProduct();
  const favoritedProducts = products.filter((product) => product.favorited);
  return favoritedProducts;
};
