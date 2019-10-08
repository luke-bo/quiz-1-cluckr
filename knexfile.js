
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'clucker_db'
    },
    migrations: {
      directory: "./db/migrations"
    }
  }
};
