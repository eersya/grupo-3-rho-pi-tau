var mariadb = require('mariadb');

var pool = 
    mariadb.createPool({
        host: “127.0.0.1”, 
        port: 3306,
        user: “ropita_user”, 
        password: “89911992”,
        database: “ropita”
    });

module.exports = Object.freeze({
    pool: pool
});
