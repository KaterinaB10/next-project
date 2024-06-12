import { useEffect, useState } from "react";
import { openSans } from "../../../fonts/openSans";
import styles from "./heroSection.module.css";
// import { EmblaCarousel } from "./Carousel";
import { fetchProduct } from "@/app/utilities/fetchProduct";

export function Hero() {
  // const [favoritedProducts, setFavoritedProducts] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   async function getProducts() {
  //     const products: IProduct[] = await fetchProduct();
  //     setFavoritedProducts(products.filter((product) => product.favorited));
  //   }

  //   getProducts();
  // }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={openSans.className}>Choose your favorite taste</h1>
        <h3>using our ordering platform.</h3>
      </div>
      {/* <EmblaCarousel products={favoritedProducts} /> */}
    </section>
  );
}
