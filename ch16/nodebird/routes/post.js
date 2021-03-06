const express = require('express');
const multer = require('multer');
const path = require('path');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
// const multerGoogleStorage = require('multer-google-storage');
// const axios = require('axios');
const fs = require('fs');

const { Post, Hashtag, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

fs.readdir('uploads', (error) => {
  if (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
  }
});

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'nodebird',
    key(req, file, cb) {
      cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
// const upload = multer({
//   storage: multerGoogleStorage.storageEngine({
//     bucket: 'node-deploy',
//     projectId: 'node-deploy-199015',
//     keyFilename: 'node-deploy-c1ce429ea8d6.json',
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });
router.post('/img', isLoggedIn, upload.single('img'), (req, res, next) => {
  console.log(req.file);
  const originalUrl = req.file.location;
  const url = originalUrl.replace(/\/original\//, '/thumb/');
  res.json({ url, originalUrl });
  // axios.get(`https://us-central1-node-deploy-199015.cloudfunctions.net/gcp-upload?filename=${req.file.filename}`)
  //   .then((response) => {
  //     const originalUrl = `${req.file.path.split('/').splice(0, 3).join('/')}/${req.file.filename}`;
  //     const url = `${req.file.path.split('/').splice(0, 3).join('/')}/${response.data}`;
  //     res.json({ url, originalUrl });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     next(error);
  //   });
});

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      userId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s]*/g);
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => Hashtag.findOrCreate({ where: { title: tag.slice(1).toLowerCase() } })));
      await post.addHashtags(result.map(r => r[0]));
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/hashtag', async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect('/');
  }
  try {
    const hashtag = await Hashtag.find({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }
    res.render('main', { title: `${query} | NodeBird`, user: req.user, twits: posts });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
