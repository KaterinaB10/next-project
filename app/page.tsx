import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <br />
      <Link href="/shopping-card">Shopping Card</Link> <br />
      <br />
      <Link href="/33">Product</Link>
    </div>
  );
}
