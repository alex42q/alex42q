const express = require('express')
const router = express.Router()

const adminCourses = require("../controllers/adminCourses")

router.get("/admincourses", adminCourses.getAdminCourses)
router.get("/getCourses", adminCourses.getCoursrs)

router.post("/postCourses", adminCourses.postCourses)

module.exports = router