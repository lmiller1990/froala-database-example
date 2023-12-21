# Creating the App

```sh
npm create vite@latest froala-react -- --template react-ts
```

# Dependencies

```
npm install knex pg express @types/express react-froala-wysiwyg froala-editor body-parser
```

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

# Config

Configured your `knexfile.js`. Look at the one included for an example.

