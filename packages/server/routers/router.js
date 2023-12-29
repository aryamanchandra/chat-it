const express = require("express");
const router = express.Router();
const { rateLimiter } = require("../controllers/rateLimiter");

router.route("/home").post(rateLimiter(60,10))

module.exports = router;