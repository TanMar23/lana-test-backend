const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    name: String,
    description: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Todo', todoSchema);