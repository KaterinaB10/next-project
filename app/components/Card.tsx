import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { Counter } from "./Counter";
import style from "./card.module.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: "800" });

interface CardProperties {
  image?: string;
  title: string;
  price: string;
  someText: string;
  link: string;
}

export function Card({ image, title, price, someText, link }: CardProperties) {
  return (
    <Link href={link}>
      <div className={style.cardContainer}>
        {image && (
          <Image
            src={image}
            alt={someText}
            width={260}
            height={260}
            className={style.cardImg}
          />
        )}
        <div className={style.cardInfo}>
          <h3 className={openSans.className}>{title}</h3>
          <p className={style.cardInfoPrice}>{price}</p>
          <p className={style.cardInfoDescription}>{someText}</p>
          <Counter />
        </div>
      </div>
    </Link>
  );
}
