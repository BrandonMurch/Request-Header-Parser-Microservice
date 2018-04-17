const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
//const geolocation = require('geolocation')
const app = express();

//app.use(express.static(__dirname + '/build'));

const logIP = (headers, header, language, userAgent) => {
  const ipRegExp = /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/gi
  let ip = ipRegExp.exec(header);
  return {
    'IP' : ip,
    'Header' : headers,
    'Language' : language,
    'User Agent' : userAgent
  }
}

app.get('/', (req, res) => {
  let response = logIP(req.headers, req.headers['x-forwarded-for'], req.acceptsLanguages, req.headers['User-Agent'])
  //res.sendFile(path.join(__dirname + '/build/index.html'));
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
})

app.listen(PORT, () => {console.log('Running!')});
