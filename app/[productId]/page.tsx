import type { Metadata, ResolvingMetadata } from "next";
import { ProductCard } from "../components/ProductCard";

//Maybe I will move this function in separate file (folder for utilities)
//I have to use try-catch function!!
async function fetchData(productId: number | string) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + productId
  );
  const product = await response.json();
  return product as Product;
}

type MetaDataProps = {
  params: { productId: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const product = await fetchData(params.productId);
  return {
    title: product.title,
    description: product.body,
  };
}

export default async function Page({
  params,
}: {
  params: { productId: number };
}) {
  const product = await fetchData(params.productId);

  return (
    <div>
      <h1>Product Card {params.productId}</h1>
      <ProductCard
        title={product.title}
        price="55 NOK"
        someText={product.body}
      />
    </div>
  );
}
