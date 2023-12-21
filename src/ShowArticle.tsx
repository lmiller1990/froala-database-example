import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../types";
import { articlesService } from "./services/articles";

export const ShowArticle: React.FC<{}> = (props) => {
  const [article, setArticle] = useState<Article>();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    articlesService.get(params.id!).then(setArticle);
  }, []);

  return (
    article && (
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">{article.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: article.body }} />
      </div>
    )
  );
};
