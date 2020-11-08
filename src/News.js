import React from "react";
import { useNewsStore } from "./hooks";
import { observer } from "mobx-react";

const News = () => {
  const { data, removeNews } = useNewsStore();

  const handleClick = (event) => {
    const id = Number(event.target.dataset.id);
    removeNews(id);
  };

  const newsArray = data.newsArray.map((row) => (
    <li key={row.id}>
      <p>Date: {row.date}<br />
        {row.body}
        <button data-id={row.id} onClick={handleClick}>
          Delete news
        </button>
      </p>
    </li>
  ));

  return <ul>{newsArray}</ul>;
};

export default observer(News);
