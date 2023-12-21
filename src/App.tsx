import { useEffect, useState } from "react";
import { Articles } from "./Articles";
import { articlesService } from "./services/articles";
import { Article } from "../types";
import { Link } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    articlesService.all().then(setArticles);
  }, []);

  return (
    <div className="flex flex-col items-center max-w-xl">
      <h1 className="text-3xl">Froala Blog</h1>
      <div className="w-full flex justify-end">
        <Link
          className="text-indigo-600 border-b border-b-indigo-600 my-4"
          to="articles/new"
        >
          New Post
        </Link>
      </div>
      <Articles articles={articles} />
    </div>
  );
}

export default App;
