"use client";
import { PopUpMessage } from "./PopUpMessage";
import { useState } from "react";

export function PopUpBtn({ title, body }: Product) {
  const [deleteButton, setDeleteButton] = useState(false);

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
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </PopUpMessage>
      </div>
    </section>
  );
}
