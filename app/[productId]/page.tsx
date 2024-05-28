import fs from "fs/promises";
import path from "path";
import React from "react";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number | string;
  title: string;
  components: string[];
  body: string;
  tags: string;
  price: string;
  favorited: boolean;
  image?: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "app", "api", "db.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents).products;
}

export default async function Page({
  params,
}: {
  params: { productId: number };
}) {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    return (
      <div>
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Product Card {params.productId}</h1>
      <ProductCard
        title={product.title}
        price={product.price}
        someText={product.body}
      />
    </div>
  );
}
