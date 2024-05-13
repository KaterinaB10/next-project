import Link from "next/link";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <br />
      <Link href="/shopping-card">Shopping Card</Link> <br />
      <br />
      <Link href="/33">Product</Link>
      <br />
      <br />
      <Card title="Name of the Product" price="55 NOK" />
    </div>
  );
}
