const router = require("express").Router();
const courseRoutes = require("./courses");

// Post routes
router.use("/courses", courseRoutes);

module.exports = router;
