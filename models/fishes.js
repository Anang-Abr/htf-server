const connection = require("../utils/database");

module.exports = {
	getAll(cb) {
		connection.query("SELECT * FROM fishes", cb);
	},
	getDataById(id, cb) {
		connection.query("SELECT * FROM fishes where id = ?", [id], cb);
	},
	insert(args, cb) {
		connection.query("INSERT INTO fishes set ?", args, cb);
	},
};
