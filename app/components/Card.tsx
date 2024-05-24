import Link from "next/link";
import Image from "next/image";

interface CardProperties {
  image?: string;
  title: string;
  price: string;
  someText: string;
  link: string;
}

export function Card({ image, title, price, someText, link }: CardProperties) {
  return (
    <div style={{ backgroundColor: "lightBlue", width: "100%" }}>
      {image && <Image src={image} alt={someText} width={300} height={300} />}
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{someText}</p>
      <Link href={link}>Read more</Link>
    </div>
  );
}
