let accounts = require("./accounts.model");
const Accounts_ = require("../../model/Accounts_");

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Accounts_.find();
    return res.json(accounts);
  } catch (error) {
    return res.status(404).json({ "Server Error": error });
  }
};

const createAccount = async (req, res) => {
  try {
    const newAccount = await Accounts_.create({
      username: req.body.username,
      funds: req.body.funds,
    });
    return res.json(newAccount);
  } catch (error) {
    return res.status(500).json({ "Server Error": error });
  }
};

const updateAccount = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedAccount = await Accounts_.splice(id, 1, {
      username: req.body.username,
      funds: req.body.funds,
    });
    return res.json(updatedAccount);
  } catch (error) {
    return res.status(404).json({ "Server Error": error });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedAccount = await Accounts_.splice(id, 1);
    return res.json(deletedAccount);
  } catch (error) {
    return res.status(404).json({ "Server Error": error });
  }
};

module.exports = {
  accountsRouter,
  getAllAccounts,
  createAccount,
  deleteAccount,
  updateAccount,
};

//const deleteAccount = async (req, res) => {
//     try {
//         const id = req.params.id;
//     };

// const updateAccount = async (req, res) => {
//     try {
//     catch (error) {
//     }
// };

// const getAllAccounts = app.get("/api/accounts/:id", (req, res) => {
//   return res.json(account);
// });

// accounts
// const createAccount = app.post("/api/accounts", (req, res) => {
//   accounts.push({
//     username: req.body.username,
//     funds: req.body.funds, //0
//   });

//   return res.json(accounts);
// });

// const deleteAccount = app.delete("/api/accounts/:id", (req, res) => {
// });

// const updateAccount = app.put("/api/accounts/:id", (req, res) => {
// });
