const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    name: String,
    completed: {
      type: Boolean,
      default: false
    },
    todo: {
      type: Schema.Types.ObjectId,
      ref: 'Todo'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Task', taskSchema);