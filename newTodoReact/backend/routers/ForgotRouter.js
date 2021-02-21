const express = require("express")
const router = express.Router()

const ForgotController = require("../controllers/ForgotController")

router.post("/forgotform", ForgotController.postForget)
router.get("/reset/:id", ForgotController.getReset)

router.post("/resetform", ForgotController.postResetPassword)

module.exports = router