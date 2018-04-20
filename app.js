const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();

module.exports.parseHeader = (header, language, userAgent) => {
    // ddd.ddd.ddd.ddd
    const ipRegExp = /(\d){1,3}\.(\d){1,3}\.(\d){1,3}\.(\d){1,3}/gi
    //en-us
    const langRegExp = /^([A-z\-])+/gi
    let ip = ipRegExp.exec(header);
    let lang = langRegExp.exec(language);
    if (ip){
      return {
        'IP': ip[0],
        'Language': lang[0],
        'User Agent': userAgent
      }
    }else{
      return {
        'IP': 'Running server locally on port: '+PORT,
        'Language': lang[0],
        'User Agent': userAgent
      }
    }
  }


app.get('/', (req, res) => {
  let response = this.parseHeader(req.headers['x-forwarded-for'], req.headers['accept-language'], req.headers['user-agent'])
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
})

app.listen(PORT, () => {
  console.log('Running!')
});
