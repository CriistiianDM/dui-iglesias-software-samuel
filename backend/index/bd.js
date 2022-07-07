const {Pool} = require('pg');
const {db} = require('./config');

const database = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port
});


//exportar la conexion a la base de datos
module.exports = database;