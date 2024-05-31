import { Card } from "./components/Card";
import { Hero } from "./components/home-page/hero-section/HeroSection";
import { fetchProduct } from "./utilities/fetchProduct";

export default async function Home() {
  const products = await fetchProduct();

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
