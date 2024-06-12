import Image from "next/image";
import { openSans } from "../../../fonts/openSans";
import styles from "./heroSection.module.css";
import { fetchPopularProducts } from "@/app/utilities/fetchPopularProduct";

export async function Hero() {
  const products = await fetchPopularProducts();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={openSans.className}>Choose your favorite taste</h1>
        <h3>using our ordering platform.</h3>
      </div>
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <Image
              src={product.image}
              alt={product.body}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
