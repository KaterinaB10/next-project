import { Card } from "./components/Card";
import fsPromises from "fs/promises";
import path from "path";

async function getLocalData() {
  const filePath = path.join(process.cwd(), "/app/db.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}

// async function fetchData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const result = await res.json();
//   return result;
// }

export default async function Home() {
  const res = await getLocalData();
  // console.log(res);

  // interface Props {
  //   id: number;
  //   title: string;
  //   body: string;
  // }

  return (
    <div>
      <h1>Homepage</h1>
      <div className="flexBoxClass">
        {res.map((props: Product) => (
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
