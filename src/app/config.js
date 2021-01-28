const dotenv = require('dotenv');
dotenv.config();

const {
    APP_PORT,
    DB_HOST,
    DB_DATABASE,
    DB_PORT,
    DB_USER,
    DB_PASSWORD
} = process.env;

module.exports = {
    APP_PORT,
    DB_HOST,
    DB_DATABASE,
    DB_PORT,
    DB_USER,
    DB_PASSWORD
};