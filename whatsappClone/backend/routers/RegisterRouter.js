const express = require("express")
const router = express.Router()

const RegisterController = require("../controllers/RegisterController")

router.post("/registerform", RegisterController.registerPost)

module.exports=router