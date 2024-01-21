//const router = express.Router();
const express = require("express");
const connectDB = require("./database");
const app = express();
const accountsRouter = require("./api/accounts/accounts.routes");

//const accounts = require("./accounts");
app.use(express.json());
app.use("/api", accountsRouter);
connectDB();

const NUM = 8000;

app.listen(NUM, () => console.log(`a ${NUM}`));
