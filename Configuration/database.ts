import {Sequelize} from "Sequelize";
const dotenv = require('dotenv');

let env = dotenv.config();
export default new Sequelize(env.parsed.DB_NAME, env.parsed.DB_USERNAME, env.parsed.DB_PASSWORD, {
    host: env.parsed.DB_HOST,
    dialect: env.parsed.DB_DIALECT,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});