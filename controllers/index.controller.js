const { getAll, getDataById } = require("../models/fishes");

const index = async (req, res) => {
	try {
		getAll((err, data) => {
			if (err) throw err;
			return res.status(200).json(data);
		});
	} catch (error) {
		return res.status(500).json({
			data: "Internal Server Error",
		});
	}
};
const getOne = async (req, res) => {
	try {
		getDataById(req.params.id, (err, data) => {
			if (err) throw err;
			return res.status(200).json(data[0]);
		});
	} catch (error) {
		return res.status(500).json({
			data: "Internal Server Error",
		});
	}
};
const create = async (req, res) => {
	try {
		const { temperature, humidity, co2 } = req.body;
		const inputData = {
			temperature,
			humidity,
			co2,
		};
		insert(inputData, (err, data) => {
			if (err) throw err;
			return res.status(200).json(data);
		});
	} catch (error) {
		return res.status(500).json({
			data: "Internal Server Error",
		});
	}
};

module.exports = { index, create, getOne };
