import fs from "fs/promises";
import path from "path";

export async function fetchProduct(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "app", "api", "db.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents).products as IProduct[];
}
