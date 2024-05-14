"use server";
import { ProductCard } from "../components/ProductCard";
// import { useState, useEffect } from "react";

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
