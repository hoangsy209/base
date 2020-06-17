import defaults from "./env";

const env = process.env.NODE_ENV || "development"

let option

switch (env) {
    case 'production':
        option = require('./env/production').default
        break;

    default:
        option = require('./env/development').default
        break;
}

export default Object.assign(defaults, option)