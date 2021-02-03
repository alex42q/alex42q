const express = require("express")
const router = express.Router()

const index = require("../controllers/index")

router.get("/", index.getIndex)

router.post("/newsLetter", index.postNews)

module.exports = router