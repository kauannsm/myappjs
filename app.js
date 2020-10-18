var express = require('express');
var app = express();
var port = 3000;

app.all (function (req, res, next) {
  if (req.secure) {
          // request was via https, so do no special handling
          next();
  } else {
          // request was via http, so redirect to https
          res.redirect('https://' + req.headers.host + req.url);
  }
});

app.get('/', (req, res) => { 
  res.send('Hello World!')
});

app.listen(port, () => {
  
  console.log('npm script test');
});
