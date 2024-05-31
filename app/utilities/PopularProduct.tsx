"use client";
import { useState } from "react";
import { fetchProduct } from "./fetchProduct";

export async function TagButtons() {
  const [filteredArticles, setFilteredArticles] = useState([]);

  const uniqueTags = new Set();

  const products = await fetchProduct();

  products.forEach((article) => {
    article.tags.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  const uniqueTagList = Array.from(uniqueTags);

  // for creating function to show filtered articles
  const fetchArticles = (tag) => {
    if (!tag) {
      return [];
    } else {
      const results = products.filter((article) => article.tags.includes(tag));
      setFilteredArticles(results);
    }
  };

  const handleButtonClick = (tag) => {
    fetchArticles(tag);
  };

  return (
    <div>
      <div className="tag-buttons-container">
        <ul className="buttons-list">
          {uniqueTagList.map((tag, index) => (
            <li key={index}>
              <button onClick={() => handleButtonClick(tag)}>#{tag}</button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="search-results">
        {filteredArticles.map((result) => (
          <li key={result.id}>
            <Article
              title={result.title}
              shortDescription={result.description}
              date={result.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
