const express = require("express");
const router = express.Router();
app.use(express.json());
const accountsRouter = require("./api/accounts/accounts.routes");
const accounts = require("./accounts");
const connectDb = require("./database");

const NUM = 8000;
connectDb();
app.listen(NUM, () => console.log(`a ${NUM}`));
