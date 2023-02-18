const mysql = require("mysql");
const config = require("../config");
const connection = mysql.createConnection({
	host: "localhost",
	database: "demo",
	user: "root",
	password: "root",
});
connection.connect();
module.exports = connection;
