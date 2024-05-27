import { promises as fs } from "fs";
import path from "path";
import { Card } from "./components/Card";

interface Product {
  id: number | string;
  title: string;
  components: [string];
  body: string;
  tags: string;
  price: string;
  favorited: boolean;
  image?: string;
}

async function fetchProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "app", "api", "db.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents).products;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Homepage</h1>
      <div className="flexBoxClass">
        {products.map((product: Product) => (
          <div style={{ width: "25%" }} key={product.id}>
            <Card
              image={product.image}
              title={product.title}
              price="55 NOK"
              someText={product.body}
              link={`/${product.id}`}
            />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
