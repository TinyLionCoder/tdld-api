import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import sendRewards from "./sendRewards";
import checkDeposit from "./checkDeposit";
import leaderboard from "./leaderboard";
import clearParticipants from "./clearDailyParticipants"
import trivia from "./trivia"

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});
router.use("/", sendRewards);
router.use("/", checkDeposit);
router.use("/", leaderboard);
router.use("/", clearParticipants);
router.use("/", trivia);

export default router;
