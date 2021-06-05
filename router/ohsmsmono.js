// wiki.js - 维基路由模块
const ohsmsmono = require('../models/ohsmsmono');
const express = require('express');
const router = express.Router();

// 主页路由
router.get('/', (req, res) => {
  res.send('ohsmsmono home');
});
router.get('/find/:num',async (req, res) => {
  const totle = await ohsmsmono.find().count();
  const result = [];
  for(let i = 0;i<req.params.num;i++){
    result.unshift(await ohsmsmono.findOne().skip(Math.floor(Math.random()*totle))) 
  }
  res.send(result);
});
router.get('/addone', async (req, res) => {
  const result = await ohsmsmono.insertMany({
    Title: 'String',
    OptionA: 'String',
    OptionB: 'String',
    OptionC: 'String',
    OptionD: 'String',
    Answer: 'String',
  })
  res.send('ohsmsmono addone');
});
router.get('/deleteone', (req, res) => {
  res.send('ohsmsmono deleteone');
});
router.get('/put', (req, res) => {
  res.send('ohsmsmono putone');
});

// “关于页面”路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});

module.exports = router;