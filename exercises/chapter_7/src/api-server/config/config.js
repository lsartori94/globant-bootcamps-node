module.exports = {
  development: {
    username: "",
    password: "",
    database: "bootcamp",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "",
    password: "",
    database: "bootcamp",
    host: "127.0.0.1",
    dialect: "postgres",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL'
  }
};