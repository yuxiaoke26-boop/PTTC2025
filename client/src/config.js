// client/src/config.js
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://pttc2025.onrender.com'  // 🔴 粘贴你刚才从 Render 复制的地址！(不要带最后的斜杠 /)
  : ''; // 本地开发时留空，走 proxy

export default API_URL;