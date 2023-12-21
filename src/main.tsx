import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ShowArticle } from "./ShowArticle.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { CreateArticle } from "./CreateArticle.tsx";
import { EditArticle } from "./EditArticle.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "articles/new",
    element: <CreateArticle />,
  },
  {
    path: "articles/:id/edit",
    element: <EditArticle />,
  },
  {
    path: "articles/:id",
    element: <ShowArticle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-full flex justify-center mt-8">
      <div className="w-full max-w-md">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
