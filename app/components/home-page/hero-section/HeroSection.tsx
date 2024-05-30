"use client";
import { openSans } from "../../../fonts/openSans";
import EmblaCarousel from "./EmblaCarousel";
import styles from "./heroSection.module.css";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={openSans.className}>Choose your favorite taste</h1>
        <h3>using our ordering platform.</h3>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}

{
  /* <div className={styles.heroAccentCircle}></div>; */
}
