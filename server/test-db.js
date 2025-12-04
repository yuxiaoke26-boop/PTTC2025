// server/test-db.js
require('dotenv').config(); // 读取环境变量
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

console.log('正在尝试连接数据库...');
console.log('读取到的 URI:', uri ? 'URI 读取成功 (隐藏具体内容)' : '❌ 未读取到 URI，请检查 .env 文件');

if (!uri) {
  process.exit(1);
}

mongoose.connect(uri)
  .then(() => {
    console.log('✅ 数据库连接成功！(Connection Successful)');
    console.log('说明你的账号密码、网络IP白名单都没有问题。');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ 数据库连接失败！(Connection Failed)');
    console.error('错误原因:', err.message);
    
    if (err.message.includes('bad auth')) {
      console.log('👉 提示: 用户名或密码错误。');
    } else if (err.message.includes('whitelist') || err.message.includes('timed out')) {
      console.log('👉 提示: 请检查 MongoDB Atlas 的 Network Access IP 白名单是否添加了本机 IP。');
    }
    process.exit(1);
  });