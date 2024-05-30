import { promises as fs } from "fs";
import path from "path";
import { Card } from "./components/Card";
import { Hero } from "./components/home-page/HeroSection";

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
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents).products;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <Hero />
      <div className="flexBoxClass">
        {products.map((product: Product) => (
          <div key={product.id}>
            <Card
              image={product.image}
              title={product.title}
              price={product.price}
              someText={product.body}
              link={`/${product.id}`}
            />
            <br />
            <br />
          </div>
        ))}
      </div>
    </main>
  );
}
