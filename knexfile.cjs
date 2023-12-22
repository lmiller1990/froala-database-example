// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "froala2",
      user: "lachlanmiller",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

