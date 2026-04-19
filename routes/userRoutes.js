const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.put("/update/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted Successfully" });
});

module.exports = router;