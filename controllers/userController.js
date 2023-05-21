const { ObjectId } = require('mongoose').Types;
const { User } = require("../models");

const userController = {
  async createUser (req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getUsers (req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
    res.status(500).json(err);
    }
  },
  async getSingleUser (req, res) {
    try {
      const user = await User.findOne({_id: req.params.userId})
      .select("-__v")
      .populate("thoughts")
      .populate("friends");
      
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
    res.status(500).json(err);
    }
  },
  async updateUser (req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        {_id: req.params.userId},
        //! This indicates that the json body will be replaced
        { $set: req.body },
        // Sets to true so updated doc is retunerd, otherwise original doc will be returned
        { new: true });
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser (req, res) {
    try {
      const user = await User.findOneAndDelete({_id: req.params.userId},
      { $set: req.body },
      { new: true });  
    //   )
    //   async deleteUser(req, res) {
    //     const dbUserData = await User.findOneAndDelete(
    //       { _id: req.params.userId },
    //       { $set: req.body },
    //       { new: true }
    // async deleteUser(req, res) {
    //     const dbUserData = await User.findOneAndDelete(
    //       { _id: req.params.userId },
    //       { $set: req.body },
    //       { new: true }
    //   );
    //   if (!dbUserData) {
    //     return res.status(404).json({ message: 'No user with that ID' });
    //   }
    //   res.json (dbUserData);
  }, 
}


module.exports = userController;