# Creating the App

If you are doing it from scratch:

```sh
npm create vite@latest froala-react -- --template react-ts
```

# Getting Started

- clone the repo
- `npm install`
- frontend: `npm run dev`
- server: `node server.js`

# Database

This tutorial uses Postgres. You should create a database. I called mine `froala` with `createdb froala` and added a schema with `psql froala  -af schema.sql`.

```sql
create table articles (
  id serial,
  title text,
  created timestamp with time zone default now(),
  body text
);
```

Add some data:

```sql
insert into articles (title, body) values ('Test post', '<p>This is a new post</p>');
```

# Config

Configured your `knexfile.js`. Look at the one included for an example.

