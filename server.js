const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));
app.use('/assets', express.static('개인 페이지 & 공유된 페이지/태양 마을☀️'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌟 태양 마을 웹사이트가 http://localhost:${PORT} 에서 실행 중입니다`);
});
