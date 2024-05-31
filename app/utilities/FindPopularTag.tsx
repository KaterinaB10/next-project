"use client";
import { useState } from "react";
import { fetchProduct } from "./fetchProduct";

export async function FindPopularTag() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const uniqueTags = new Set();

  const products = await fetchProduct();

  return <div></div>;
}
