const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// const postRoutes = require("./postRoutes")
// const deleteRoutes = require("./deleteRoutes")
router.use("/users", userRoutes)
router.use('/thoughts', thoughtRoutes);

module.exports = router;

