const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    content: { type: String },
    img: { type: Array },
    type: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
