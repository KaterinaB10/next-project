import fs from "fs/promises";
import path from "path";

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
