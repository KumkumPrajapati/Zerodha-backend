const { Schema } = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    Price: Number,
    percent: String,
    isDown : Boolean,
});

module.exports = {OrderSchema};