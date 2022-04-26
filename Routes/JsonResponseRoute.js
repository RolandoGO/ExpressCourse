const express = require("express")
const {response} = require("../Controllers/JsonResponseController")
const router = express.Router()

router.get("/", response)

module.exports = router