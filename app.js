var express = require('express');
var app = express();
var port = 3000;

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
      res.redirect(`https://${req.hostname}${req.url}`); //Redireciona pra HTTPS
  else //Se a requisição já é HTTPS
      next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
});


app.get('/', (req, res) => { 
  res.send('Hello World!')
});

app.listen(port, () => {
  
  console.log('npm script test');
});
