const express = require("express")
const router = express.Router()

const LoginController = require("../controllers/LoginController")

router.post("/login-form", LoginController.postLogin)

module.exports = router