const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    name: String,
    description: String,
    task: {
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Todo', todoSchema);