import React, { useEffect, useState } from "react";
import { articlesService } from "./services/articles";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from "./Editor";
import { Article } from "../types";

export const EditArticle: React.FC = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article>()
  const params = useParams<{id:string}>()

  async function handleSubmit(article: Article) {
    await articlesService.update(article);
    navigate("/");
  }

  useEffect(() => {
    articlesService.get(params.id!).then(setArticle)
  }, [])

  return (
    article && <div>
      <Editor
        article={article}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
