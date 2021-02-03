const express = require("express")
const { route } = require(".")
const router = express.Router()

const adminStudents = require("../controllers/adminStudents")

router.get("/adminstudents", adminStudents.getAdminStudents)
router.get("/getStudents", adminStudents.getStudents)
router.post("/getUpdateStudents", adminStudents.getForUpdate)

router.post("/postStudents", adminStudents.postStudents)
router.post("/deleteStudent", adminStudents.postDeleteStudent)
router.post("/updateStudents", adminStudents.postUpdateStudent)

module.exports = router