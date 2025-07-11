module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./library.db"
  },
  test: {
    dialect: "sqlite",
    storage: "./library.db"
  },
  production: {
    dialect: "postgres",
    url: process.env.DATABASE_URL,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
