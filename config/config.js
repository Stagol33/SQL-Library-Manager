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
    // dialect: "sqlite",
    // storage: "/tmp/library.db"
    // Comment out PostgreSQL config temporarily
    
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