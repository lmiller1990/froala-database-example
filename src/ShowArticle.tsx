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

  return article && <div>{article.title}</div>;
};
