const express = require('express');
const qmsmono = require('./router/qmsmono.js');
const qms = require('./router/qms.js');
const qmsjudge = require('./router/qmsjudge.js');
const ems = require('./router/ems.js');
const emsmono = require('./router/emsmono.js');
const emsjudge = require('./router/emsjudge.js');
const ohsms = require('./router/ohsms.js');
const ohsmsjudge = require('./router/ohsmsjudge.js');

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
// ...
// 设置 Mongoose 连接
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/Library';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

app.use(express.urlencoded({extended:false}))
app.use('/qmsmono', qmsmono);
app.use('/qms', qms);
app.use('/qmsjudge', qmsjudge);
app.use('/ems', ems);
app.use('/emsmono', emsmono);
app.use('/emsjudge', emsjudge);
app.use('/ohsms', ohsms);
app.use('/ohsmsjudge', ohsmsjudge);



// respond with "hello world" when a GET request is made to the homepage
//提取params
app.get('/profile/:id/:name', function(req, res) {
  console.dir(req.params)
    res.send('id:'+req.params.id);
  });
//提取查询字符串
app.get('/str', function(req, res) {
  console.dir(req.query)
  res.send('hello world');
  });
app.get('/', function(req, res) {
  res.send('hello world');
});
//提取post请求
app.post('/', function(req, res) {
  console.dir(req.body.id)
  res.send('hello world');
});

app.listen(3334);
console.log('connect to http://localhost:3334')