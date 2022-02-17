const express = require("express");
const Thing = require("../../db/models/Thing");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Thing.find();
  res.status(200);
  res.json({ things });
});

router.get("/things/:id", async (req, res) => {
  const thing = await Thing.findById(req.params.id);
  res.status(200);
  res.json({ thing });
});

router.delete("/things/:id", async (req, res) => {
  const thing = await Thing.findByIdAndDelete(req.params.id);
  res.status(202);
  res.json({ thing });
});

router.post("/things", async (req, res) => {
  const newThing = req.body;
  const createdThing = await Thing.create(newThing);
  res.status(201);
  res.json(createdThing);
});

router.put("/things", async (req, res) => {
  const { _id: id } = req.body;
  const createdThing = await Thing.findByIdAndUpdate(id, req.body);
  res.status(201);
  res.json(createdThing);
});

module.exports = router;
