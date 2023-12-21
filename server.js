import express from "express";

import knex from "knex";
import credentials from "./knexfile.cjs";

const db = knex(credentials.development);

const app = express();

app.use(express.json());

app.post("/articles", async (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body,
    description: req.body.description,
  };

  await db("articles").insert(post);

  res.sendStatus(201).end();
});

app.put("/articles/:id", async (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body,
    description: req.body.description,
  };

  await db("articles").update(post).where("id", "=", req.params.id)

  res.sendStatus(201).end();
});

app.get("/articles/:id", async (req, res) => {
  const article = await db("articles")
    .first()
    .where("id", "=", req.params.id)
    .select(["id", "title", "description", "body"]);

  res.json(article);
});

app.get("/articles", async (req, res) => {
  const articles = await db("articles").select([
    "id",
    "title",
    "description",
    "body",
  ]).orderBy("created", "desc");

  res.json(articles);
});

app.listen(3000);
