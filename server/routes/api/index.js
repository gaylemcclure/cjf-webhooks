const router = require("express").Router();
const airtableRoutes = require("./airtable");

router.use("/airtable", airtableRoutes);

module.exports = router;
