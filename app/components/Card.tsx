import { link } from "fs";
import Link from "next/link";

interface CardProperties {
  title: string;
  price: string;
  someText: string;
  link: string;
}

export function Card({ title, price, someText, link }: CardProperties) {
  return (
    <div style={{ backgroundColor: "lightBlue", width: "100%" }}>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{someText}</p>
      <Link href={link}>Read more</Link>
    </div>
  );
}
