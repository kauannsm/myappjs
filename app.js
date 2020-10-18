var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => { 
  res.redirect('https://' + req.headers.host + req.url);
  res.send('Hello World!')
});

app.listen(port, () => {
  
  console.log('npm script test');
});
