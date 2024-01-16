const express = require("express");
const app = express();
app.use(express.json());

const accounts = require("./accounts");
// app.get("hi", (req, res) => {.});
app.get("/api/accounts", (req, res) => {
  console.log(req.body);
  accounts.push({
    id: accounts[accounts.length - 1].id + 1,
    username: req.body.username,
    funds: req.body.funds, // 0
  });
  return res.json(accounts);
});
//app.put("/api/products", (req, res) => res.json(products));
app.get("/api/accounts/:id", (req, res) => {
  const id = req.params.id;

  const account = accounts.find((account) => account.id === id);

  if (!account) {
    return res
      .status(404)
      .json({ message: `Account with the id ${id} found!` });
  }
  return res.json(account);
});