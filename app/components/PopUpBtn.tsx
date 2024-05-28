"use client";
import { fetchProducts } from "../utilities/FetchData";
import { PopUpMessage } from "./PopUpMessage";
import { useState } from "react";

export async function PopUpBtn(params: Product) {
  const [deleteButton, setDeleteButton] = useState(false);

  const products = await fetchProducts();
  const product = products.find((p) => p.id === params.id);

  return (
    <section className="btn-section">
      <div className="btn-container">
        <button
          onClick={() => setDeleteButton(true)}
          className="btn"
          style={{ width: "50px", height: "50px" }}
        >
          +
        </button>

        <PopUpMessage trigger={deleteButton}>
          <div
            className="pop-up-message-text"
            style={{ width: "200px", height: "200px", background: "lightBlue" }}
          >
            <h1>{product.title}</h1>
            <p>{product.body}</p>
          </div>
        </PopUpMessage>
      </div>
    </section>
  );
}
