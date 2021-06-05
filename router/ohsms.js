// wiki.js - 维基路由模块
const ohsms = require('../models/ohsms');
const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
  res.send('ohsms home');
});
router.get('/type/:type/num/:num',async (req, res) => {
  const totle = await ohsms.find({Type:req.params.type}).count();
  const result = [];
  for(let i = 0;i<req.params.num;i++){
    result.unshift(await ohsms.findOne({Type:req.params.type}).skip(Math.floor(Math.random()*totle))) 
  }
  res.send(result);
});
router.get('/source/:source',async (req, res) => {
  const totle = await ohsms.find({Source:req.params.source}).sort({Type:1});

  res.send(totle);
});
router.get('/addone', async (req, res) => {
  const result = await ohsms.insertMany({
    Title: 'String',
    OptionA: 'String',
    OptionB: 'String',
    OptionC: 'String',
    OptionD: 'String',
    Answer: 'String',
  })
  res.send('ohsms addone');
});
router.get('/deleteone', (req, res) => {
  res.send('ohsms deleteone');
});
router.get('/put', (req, res) => {
  res.send('ohsms putone');
});

// “关于页面”路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});

module.exports = router;