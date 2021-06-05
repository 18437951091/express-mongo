// wiki.js - 维基路由模块
const qmsjudge = require('../models/qmsjudge');
const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
  res.send('qmsjudge home');
});
router.get('/find/:num',async (req, res) => {
  const totle = await qmsjudge.find().count();
  const result = [];
  for(let i = 0;i<req.params.num;i++){
    result.unshift(await qmsjudge.findOne().skip(Math.floor(Math.random()*totle))) 
  }
  res.send(result);
});
router.get('/addone', async (req, res) => {
  const result = await qmsjudge.insertMany({
    Title: 'String',
    OptionA: 'String',
    OptionB: 'String',
    OptionC: 'String',
    OptionD: 'String',
    Answer: 'String',
  })
  res.send('qmsjudge addone');
});
router.get('/deleteone', (req, res) => {
  res.send('qmsjudge deleteone');
});
router.get('/put', (req, res) => {
  res.send('qmsjudge putone');
});

// “关于页面”路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});

module.exports = router;