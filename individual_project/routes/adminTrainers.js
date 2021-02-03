const express = require("express")
const router = express.Router()

const adminTrainers = require("../controllers/adminTrainers")

router.get("/admintrainers", adminTrainers.getAdminTrainers)
router.get("/getTrainers", adminTrainers.getTrainers)

router.post("/postTrainers", adminTrainers.postTrainers)

module.exports = router