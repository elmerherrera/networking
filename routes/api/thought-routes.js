const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

router.get("/api/thoughts", getAllThought);
router.post("/api/thoughts", createThought);
router.get("/api/thoughts/:id", getThoughtById);
router.put("/api/thoughts/:id", updateThought);
router.delete("/api/thoughts/:id", deleteThought);
router.post("/api/thoughts/:thoughtId/reactions", addReaction);
router.delete("/api/thoughts/:thoughtId/reactions/:reactionId", removeReaction);

module.exports = router;