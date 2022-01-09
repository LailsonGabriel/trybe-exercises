const express = require("express");
const router = express.Router();
const axios = require("axios");

const API_URL = "https://api.coindesk.com/v1/bpi/currentprice/BTC.json);";

router.get("/price", async (req, res) => {
  const token = req.headers.authorization;
  if (String(token).length !== 12)
    return res.status(401).json({ message: "Invalid token" });
  try {
    const apiRequest = axios.get(API_URL).then((response) => response.data);
    res.status(200).json(await apiRequest);
  } catch (err) {
    console.log("error");
  }
});

module.exports = router;
