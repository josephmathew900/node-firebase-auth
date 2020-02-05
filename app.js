var express = require('express');
var app = express();
let authorized = true;
const cors = require('cors');

app.use(cors());

function checkAuth(req, res, next){
    if(authorized){
        next();
    }else{
        res.status(403).send('Unauthorized');
        return;
    }
}

app.use('/', checkAuth);

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!'
    });
  });

app.listen(3000);