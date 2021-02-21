const express = require("express")
const router = express.Router()

const RegisterUserController = require("../controllers/RegisterController")

router.post("/register-form", RegisterUserController.postRegister)

module.exports= router