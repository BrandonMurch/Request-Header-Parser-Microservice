const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
//const geolocation = require('geolocation')
const app = express();

//app.use(express.static(__dirname + '/build'));

const logIP = (remote, header, req) => {
  return {
    'remote' : remote,
    'header' : header,
    'req' : req,
    'test' : 'test'
  }
}

app.get('/', (req, res) => {
  let response = logIP(req.connection.remoteAddress, req.headers['x-forwarded-for'], req.ip)
  //res.sendFile(path.join(__dirname + '/build/index.html'));
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
})

app.listen(PORT);
