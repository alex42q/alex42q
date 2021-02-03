const express = require("express")
const router = express.Router()

const admin = require("../controllers/admin")

router.get("/admin", admin.getAdmin)

module.exports = router