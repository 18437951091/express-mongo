const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const qmsSchema = new Schema(
  {
    Title: String,
    OptionA: String,
    OptionB: String,
    OptionC: String,
    OptionD: String,
    Answer: String,
    Type: String,
    Source: String,
  }
);

// 导出 Author 模型
module.exports = mongoose.model('qms', qmsSchema);