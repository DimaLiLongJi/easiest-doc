const express = require('express');

const app = express();

// ejs 相关
app.engine('.html', require('ejs').__express);

app.set('view engine', 'html');

// 静态文件
app.set('views', './');
app.use(express.static('./'));

app.use('/easiest-doc', (req, res, next) => {
  res.render('index.html');
});

app.listen(1234);
console.log(`listening port 1234`);

module.exports = app;
