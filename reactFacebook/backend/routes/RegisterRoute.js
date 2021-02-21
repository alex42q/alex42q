const express = require("express")
const router = express.Router()

const Register = require("../controllers/RegisterControler")

router.post("/register", Register.postRegister)


module.exports = router