import React from "react";
import { articlesService } from "./services/articles";
import { useNavigate } from "react-router-dom";
import { Editor } from "./Editor";
import { Article } from "../types";

export const CreateArticle: React.FC = () => {
  const navigate = useNavigate();

  async function handleSubmit(article: Article) {
    await articlesService.create(article);
    navigate("/");
  }

  return (
    <div>
      <Editor
        article={{ title: "", body: "", id: 0 }}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
