const express = require("express")
const router = express.Router()

const adminAss = require("../controllers/adminAss")

router.get("/adminass", adminAss.getAdminAsss)
router.get("/getAss", adminAss.getAss)

router.post("/postAss", adminAss.postAss)

module.exports = router