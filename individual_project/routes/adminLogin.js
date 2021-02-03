const express = require("express")
const router = express.Router()

const adminLogin = require("../controllers/adminLogin")

router.get("/adminLogin", adminLogin.getAdminLogin)

router.post("/admin-form", adminLogin.postAdminLogin)


module.exports = router