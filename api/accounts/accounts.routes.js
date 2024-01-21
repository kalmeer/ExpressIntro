const express = require("express");
const {
  getAllAccounts,
  updateAccount,
  deleteAccount,
  createAccount,
} = require("./accounts.controllers");

const router = express.Router();

router.get("/", getAllAccounts);
router.put("/", updateAccount);
router.delete("/", deleteAccount);
router.post("/", createAccount);

module.exports = router;
