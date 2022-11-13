const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const dotenv= require("dotenv").config({path:"config/config.env"})
require("./config/config.js")
const productroute = require("./routes/productrout")
const userrout = require("./routes/userrout")
const orderrout = require("./routes/orderrout")

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: process.env.FRONTEND_URL})) 

app.use("/", productroute)
app.use("/auth",userrout)
app.use("/",userrout)
app.use("/",orderrout)


app.listen(process.env.PORT);