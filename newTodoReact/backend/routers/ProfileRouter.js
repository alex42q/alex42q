const express = require("express")
const router = express.Router()

const profileController = require("../controllers/ProfileController")

router.get("/profile", profileController.getProfile)
router.get("/profileuser", profileController.getProfileUser)

router.post("/profilechangemail", profileController.postChangeEmailProfile)
router.post("/profilechangepassword", profileController.postChangePassword)
router.post("/profilefirstlastname", profileController.postFirstnameLastname)


module.exports = router