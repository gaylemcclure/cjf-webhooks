const router = require("express").Router();
const welcomePage = require("./welcomePageRoutes");
const apiRoutes = require("./api/index");

router.use("/", welcomePage);
router.use("/api", apiRoutes);

module.exports = router;
