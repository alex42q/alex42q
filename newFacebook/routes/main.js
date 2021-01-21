const express = require("express")
const router = express.Router()

const main = require("../controllers/main")

router.get("/main", main.mainGet)

router.post("/posts", main.mainPostpost)


module.exports = router