const { model, Schema } = require("mongoose");

const AccountSchema = new Schema({
  name: { type: String, required: true },
  username: String,
  funds: { type: Number, default: 100 },
});
{
  timestamps: true;
}
module.exports = model("Accounts", AccountSchema);
