const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought).delete(deleteThought).put(updateThought);

router.route("/:thoughtId/friend/:friendId").post(addReaction).delete(removeReaction);

module.exports = router;