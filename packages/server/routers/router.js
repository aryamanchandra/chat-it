const express = require("express");
const router = express.Router();
const { rateLimiter } = require("../controllers/ratelimiter");

router.route("/home").post(rateLimiter(60,10))

module.exports = router;