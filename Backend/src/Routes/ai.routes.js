const express = require("express");
const aiController = require("../Controllers/ai.controller")


const router = express.Router()


router.get("/get-response",aiController.getResponse)



module.exports = router;