const express = require("express");
const aiController = require("../Controllers/ai.controller")


const router = express.Router()


router.post("/get-review",aiController.getReview)



module.exports = router;