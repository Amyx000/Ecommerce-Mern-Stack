const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const dotenv= require("dotenv").config({path:"config/config.env"})
require("./config/config.js")
const productroute = require("../server/routes/productrout")
const userrout = require("./routes/userrout")

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use("/", productroute)
app.use("/auth",userrout)
app.use("/",userrout)




app.listen(process.env.PORT);