import Link from "next/link";
import { Card } from "./components/Card";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}

export default async function Home() {
  const res = await fetchData();
  console.log(res);

  interface Props {
    id: number;
    title: string;
    body: string;
  }

  return (
    <div>
      <h1>Homepage</h1>
      <br />
      <Link href="/shopping-card">Shopping Card</Link> <br />
      <br />
      <Link href="/33">Product</Link>
      <br />
      <br />
      <div className="flexBoxClass">
        {res.map((props: Props) => (
          <div key={props.id}>
            <Card title={props.title} price="55 NOK" someText={props.body} />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
