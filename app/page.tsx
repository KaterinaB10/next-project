import Link from "next/link";
import { Card } from "./components/Card";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}

export default async function Home() {
  const res = await fetchData();
  // console.log(res);

  interface Props {
    id: number;
    title: string;
    body: string;
  }

  return (
    <div>
      <h1>Homepage</h1>
      <div className="flexBoxClass">
        {res.map((props: Props) => (
          <div style={{ width: "30%" }} key={props.id}>
            <Card
              title={props.title}
              price="55 NOK"
              someText={props.body}
              link={`/` + props.id}
            />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
