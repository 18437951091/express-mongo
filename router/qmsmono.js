// wiki.js - 维基路由模块
const qmsmono = require('../models/qmsmono');
const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
  res.send('qmsmono home');
});
router.get('/find/:num',async (req, res) => {
  const totle = await qmsmono.find().count();
  const result = [];
  for(let i = 0;i<req.params.num;i++){
    result.unshift(await qmsmono.findOne().skip(Math.floor(Math.random()*totle))) 
  }
  res.send(result);
});
router.get('/addone', async (req, res) => {
  const result = await qmsmono.insertMany({
    Title: 'String',
    OptionA: 'String',
    OptionB: 'String',
    OptionC: 'String',
    OptionD: 'String',
    Answer: 'String',
  })
  res.send('qmsmono addone');
});
router.get('/deleteone', (req, res) => {
  res.send('qmsmono deleteone');
});
router.get('/put', (req, res) => {
  res.send('qmsmono putone');
});

// “关于页面”路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});

module.exports = router;