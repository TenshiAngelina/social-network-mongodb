const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/userController.js");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

router.route("/:userId/friend/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;