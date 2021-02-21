const express = require("express")
const router = express.Router()

const RegisterUserController = require("../controllers/RegisterController")

router.post("/registerform", RegisterUserController.postRegister)

module.exports = router