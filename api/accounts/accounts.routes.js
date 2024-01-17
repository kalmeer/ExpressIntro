const express = require("express");
const app = express();
const accountsRouter = require("./accounts.routes");
const {
  getAllAccounts,
  updateAccount,
  deleteAccount,
  createAccount,
} = require("./accounts.controllers");

const router = express.Router();
accounts.routes.use(express.json());

accounts.routs.get("/", getAllAccounts);
accounts.routs.put("/", updateAccount);
accounts.routes.delete("/", deleteAccount);
accounts.routes.post("/", createAccount);

module.exports = router;
