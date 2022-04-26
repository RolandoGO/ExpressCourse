const express = require("express")
const {WelcomeMsj} = require("../Controllers/HomeController")
const router = express.Router()

router.get("/", WelcomeMsj)

module.exports = router