import { fetchProduct } from "./fetchProduct";

export const FindPopularTag = async (): Promise<Product[]> => {
  try {
    const products: Product[] = await fetchProduct();
    const favoritedProducts = products.filter((product) => product.favorited);

    return (
      <div>
        {favoritedProducts.map((p: Product) => {
          return (
            <div key={p.id}>
              <h1>{p.title}</h1>
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
};
