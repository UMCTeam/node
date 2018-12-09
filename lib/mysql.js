const MySql  = require("mysql");
const config = require("../config/default");

const pool = MySql.createPool({
    host     : config.database.HOST,
    port     : config.database.PORT,
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE
});

const query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }   
                    connection.release();
                });
            }
        });
    });
};

const findUser = function(name) {
    const _sql = `select * from user where username="${name}"`;
    return query(_sql);
}

module.exports = {
    findUser
};