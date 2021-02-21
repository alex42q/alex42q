const express = require("express")
const router = express.Router()

const ResetController = require("../controllers/ResetController")

router.post("/resetform", ResetController.postReset)
router.get("/resetpassword/:id", ResetController.getReset)
router.post("/resetpasswordform", ResetController.postResetPassword)


module.exports= router