// wiki.js - 维基路由模块
const qms = require('../models/qms');
const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
  res.send('qms home');
});
router.get('/type/:type/num/:num',async (req, res) => {
  const totle = await qms.find({Type:req.params.type}).count();
  const result = [];
  for(let i = 0;i<req.params.num;i++){
    result.unshift(await qms.findOne({Type:req.params.type}).skip(Math.floor(Math.random()*totle))) 
  }
  res.send(result);
});
router.get('/source/:source',async (req, res) => {
  const totle = await qms.find({Source:req.params.source}).sort({Type:1});

  res.send(totle);
});
router.get('/addone', async (req, res) => {
  const result = await qms.insertMany({
    Title: 'String',
    OptionA: 'String',
    OptionB: 'String',
    OptionC: 'String',
    OptionD: 'String',
    Answer: 'String',
  })
  res.send('qms addone');
});
router.get('/deleteone', (req, res) => {
  res.send('qms deleteone');
});
router.get('/put', (req, res) => {
  res.send('qms putone');
});

// “关于页面”路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});

module.exports = router;