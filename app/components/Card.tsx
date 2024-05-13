import Link from "next/link";

interface CardProperties {
  title: string;
  price: string;
}

export function Card({ title, price }: CardProperties) {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      <h1>{title}</h1>
      <p>{price}</p>
      <Link href="/33">Read more</Link>
    </div>
  );
}
