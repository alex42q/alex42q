const express = require("express")
const router = express.Router()

const HomeController = require("../controllers/HomeController")

router.get("/", HomeController.getHome)
router.get("/showtodos", HomeController.showTodos)
// router.get("/showuser", HomeController.showUser)

router.post("/addtodo", HomeController.postTodo)
router.post("/deletetodo", HomeController.deleteTodos)

module.exports = router