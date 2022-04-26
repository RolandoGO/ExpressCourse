const express = require("express")
const cors = require("cors")
require("dotenv").config()
const HomePageRoute = require("./Routes/homeRoute")
const JsonResponseRoute = require("./Routes/JsonResponseRoute")

const app = express()
const port  = process.env.PORT

app.use(cors())
app.use("/", HomePageRoute)
app.use("/json", JsonResponseRoute)


app.listen(port, ()=>console.log(`server in port ${port}`))