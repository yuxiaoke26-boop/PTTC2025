require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 引入模型
const User = require('./models/User'); 
const Application = require('./models/Application'); // 确保 server/models/Application.js 存在

const app = express();

// --- 中间件 ---
app.use(cors());
app.use(express.json());

// --- 连接数据库 ---
// 如果你的 .env 里没有 MONGO_URI，请把这里换成你的真实连接字符串
const MONGO_URI = process.env.MONGO_URI || "你的mongodb+srv连接字符串...";

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));


// --- 所有 API 路由 ---

// 1. 用户注册
app.post('/api/register', async (req, res) => {
  try {
    const { username, phoneNumber, address, password, isGdprConsented } = req.body;
    if (!isGdprConsented) return res.status(400).json({ message: "GDPR must be agreed upon" });
    
    // 检查重名
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: "Username already exists" });

    const newUser = new User({ username, phoneNumber, address, password, isGdprConsented });
    await newUser.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// 2. 用户登录 (返回 role)
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) return res.status(400).json({ message: "Incorrect username or password" });

    // 关键点：一定要返回 role
    res.json({ 
      message: "Login successful", 
      user: { 
        id: user._id, 
        username: user.username, 
        role: user.role, 
        phoneNumber: user.phoneNumber,
        address: user.address,             // <--- 新增这一行！
      } 
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// 3. 提交报名 (普通用户用)
app.post('/api/apply', async (req, res) => {
  try {
    const { username, eventName, category } = req.body;
    const newApp = new Application({ username, eventName, category });
    await newApp.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});

// 4. 获取所有用户列表 (管理员用) - 之前报错404就是因为缺了这个！
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // 不返回密码
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to obtain" });
  }
});

// 5. 获取所有报名列表 (管理员用) - 之前报错404也是因为缺了这个！
app.get('/api/applications', async (req, res) => {
  try {
    const apps = await Application.find().sort({ applyTime: -1 });
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: "Failed to obtain" });
  }
});


// --- 启动服务器 ---
// 端口使用 5001 避开 AirPlay 冲突
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));