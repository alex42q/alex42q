const express = require("express")
const router = express.Router()

const MainController = require("../controllers/MainController")

router.get("/", MainController.getMain)
router.get("/gettodos", MainController.getTodos)

router.post("/todoform", MainController.postMain)

module.exports = router