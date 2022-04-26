const express = require("express")
const JsonResponseController = require("../Controllers/JsonResponseController")
const router = express.Router()

router.get("/", JsonResponseController.response)

module.exports = router