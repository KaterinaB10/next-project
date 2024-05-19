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
  // const productData: Promise<Product> = fetchData(productId);
  // const product: Product = await productData;

  // fetched data
  // const product = (await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${productId}`
  // ).then((res) => res.json())) as ProductType;
  const product = (await fetchData(productId)) as ProductType;

  return {
    title: `title ` + product.title,
    description: product.body,
  };
}

//   try {
//     const productId = params.id;

//     // fetch data
//     const product = (await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${productId}`
//     ).then((res) => res.json())) as ProductType;

//     // optionally access and extend (rather than replace) parent metadata
//     const previousImages = (await parent).openGraph?.images || [];

//     return {
//       title: product.title,
//       openGraph: {
//         images: ["/some-specific-page-image.jpg", ...previousImages],
//       },
//     };
//   } catch (error) {
//     return {
//       title: "Not Found",
//       description: "The page you are looking for does not exist",
//     };
//   }
// }

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
