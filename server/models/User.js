const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // 用户名/昵称
  username: {
    type: String,
    required: true,
    unique: true
  },
  // 手机号码
  phoneNumber: {
    type: String,
    required: true
  },
  // 居住地址
  address: {
    type: String,
    required: true
  },
  // 密码 (实际项目中建议加密存储，这里简化为明文演示)
  password: {
    type: String,
    required: true
  },
  // GDPR 隐私政策同意 (必须为 true 才能注册)
  isGdprConsented: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role: { 
    type: String, 
    default: 'user', 
    enum: ['user', 'admin'] 
  }
});

module.exports = mongoose.model('User', UserSchema);