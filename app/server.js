require('dotenv').config();
const express = require('express');
const multer = require('multer');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'troque-este-segredo-em-producao',
  resave: false,
  saveUninitialized: true
}));

const uploadDir = path.join(__dirname, 'uploads');
const videoDir = path.join(__dirname, 'videos');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir);

const upload = multer({ dest: 'uploads/' });
const USER = process.env.TV_USER || 'admin';
const PASS = process.env.TV_PASS || 'admin123';

function auth(req, res, next) {
  if (req.session.user) return next();
  res.redirect('/login.html');
}

app.use('/videos', express.static(videoDir));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
  const { user, pass } = req.body;
  if (user === USER && pass === PASS) {
    req.session.user = true;
    return res.redirect('/dashboard');
  }
  res.redirect('/login.html?erro=1');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login.html');
});

app.get('/dashboard', auth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

app.post('/upload', auth, upload.single('video'), (req, res) => {
  if (!req.file) return res.send('Nenhum arquivo enviado');

  const targetPath = path.join(__dirname, 'videos/video_atual.mp4');

  fs.copyFile(req.file.path, targetPath, (err) => {
    if (err) {
      console.error('Erro ao copiar:', err);
      return res.send('Erro ao salvar vídeo');
    }
    fs.unlink(req.file.path, () => {});
    res.redirect('/dashboard');
  });
});

app.get('/tv', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tv.html'));
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
