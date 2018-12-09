/* eslint-disable no-unused-vars */
const host = process.env.DB_HOST || 'localhost';

module.exports = {
  server: {
    port: 8080
  },
  pagination: {
    defaultPage: 1,
    defaultLimit: 10
  }
};
