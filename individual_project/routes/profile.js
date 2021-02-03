const express = require("express")
const router = express.Router()

const profile = require("../controllers/profile")

router.get("/profile", profile.getProfile)

router.post("/updateEmail", profile.postEmail)
router.post("/updatePassword", profile.updatePassword)
router.post("/updatefirstLast", profile.updateFirstLast)

module.exports = router