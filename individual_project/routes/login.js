const express = require("express")
const router = express.Router()

const login = require("../controllers/login")

router.get("/login", login.getLogin)

router.post("/login-form", login.postLogin)

module.exports = router