const express = require("express")
const router = require(".")
const Router = express.Router()

const logout = require("../controllers/logout")

router.get("/logout", logout.getLogout)

module.exports = router