import { Metadata } from "next";
import { Test } from "../components/Test";
import { FindPopularTag } from "../utilities/FindPopularTag";

export const metadata: Metadata = {
  title: "Order Form",
  description: "Online order coffee form shopping card",
  keywords: "eshopping, order coffee, order form",
};

export default function ShoppingCard() {
  return (
    <main>
      <FindPopularTag />
      <Test />
      <h1>Shopping Card</h1>
    </main>
  );
}
