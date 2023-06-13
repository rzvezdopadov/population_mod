import path from "path";

const express = require("express");
const router = express.Router();

function answerIndex(res: any, next: any) {
	res.status(200).sendFile(
		path.join(__dirname, "./index.html"),
		{},
		(error) => {
			if (error) next();
		}
	);
}

router.get("/", function (_req, res, next) {
	answerIndex(res, next);
});

router.get("/*", function (_req, res) {
	res.status(404).json({ message: "pnf" });
});

module.exports = router;
