const express = require("express")
const router = express.Router()

const index = require("../controllers/index")

router.get("/", index.getIndex)
router.get("/logout", index.GetLogout)

router.post("/register", index.postIndex)
router.post("/login", index.postLogin)

module.exports = router
