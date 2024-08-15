// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
  client: "pg",
  connection: {
    database: "postgres",
    host: '127.0.0.1',
    port: 9000,
    user: "postgres",
    password: "admin",
  },
};
