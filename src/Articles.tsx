import React from "react";
import { Link } from "react-router-dom";
import type { Article } from "../types";
import { EditIcon } from "./EditIcon";

export const Articles: React.FC<{ articles: Article[] }> = (props) => {
  return (
    <ul className="w-full">
      {props.articles.map((article) => (
        <li key={article.id} className="w-full flex justify-between my-2">
          <Link
            className="border-b border-grey-700 text-lg"
            to={`/articles/${article.id}`}
          >
            {article.title}
          </Link>

          <Link to={`/articles/${article.id}/edit`} className="text-indigo-700" >
            <EditIcon />
          </Link>
        </li>
      ))}
    </ul>
  );
};
