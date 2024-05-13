import Link from "next/link";

interface CardProperties {
  title: string;
  price: string;
  someText: string;
}

export function Card({ title, price, someText }: CardProperties) {
  return (
    <div style={{ backgroundColor: "lightBlue", width: "30%" }}>
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{someText}</p>
      <Link href="/33">Read more</Link>
    </div>
  );
}
