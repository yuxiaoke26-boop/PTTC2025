// server/models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  username: { type: String, required: true }, // 谁报的名
  eventName: { type: String, required: true }, // 报了什么项目
  category: { type: String, required: true },  // 类别 (e.g., Table Tennis / Highland Games)
  status: { type: String, default: 'Pending' }, // 状态：待审核
  applyTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);