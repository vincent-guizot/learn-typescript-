import express from "express";
const router = express();

router.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

export default router;
