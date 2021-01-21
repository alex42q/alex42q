const express = require("express")
const router = express.Router()

const searchRouter = require("../controllers/search")

router.get("/searchPage", searchRouter.searchGet)
router.post("/search", searchRouter.searchPost)


module.exports = router