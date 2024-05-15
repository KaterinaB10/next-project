"use server";
import type { Metadata, ResolvingMetadata } from "next";
import { ProductCard } from "../components/ProductCard";

type Props = {
  params: { id: number };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  type ProductType = {
    title: string;
    body: string;
  };
  const productId = params.id;

  // fetched data
  const product = (await fetchData(productId)) as ProductType;
  return {
    title: `title ` + product.title,
    description: product.body,
  };
}

async function fetchData(productId: number) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + productId
  );
  const result = await res.json();
  return result;
}

type Product = {
  title: string;
  body: string;
};

export default async function ProductId({
  params,
}: {
  params: { productId: number };
}) {
  const product = (await fetchData(params.productId)) as Product;
  console.log(product);

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
