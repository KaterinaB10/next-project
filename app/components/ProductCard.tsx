import Link from "next/link";

interface PrCard {
  title: string;
  price: string;
  someText: string;
}

export function ProductCard({ title, price, someText }: PrCard) {
  return (
    <div style={{ backgroundColor: "lightBlue", width: "100%" }}>
      <h1>{title}</h1>
      <p>{someText}</p>
      <h2>{price}</h2>
    </div>
  );
}
