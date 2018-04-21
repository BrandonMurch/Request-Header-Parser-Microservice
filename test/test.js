const chai = require('chai');
const assert = chai.assert;
const request = require('request');
const app = require('../app.js');
const parseHeader = app.parseHeader;

describe('RegExp', () => {
  let header = parseHeader('183.84.8.383l;akjiek3333kfj9', 'en-us:4850P=03', 'mozilla');
  let expected = {
    'IP': '183.84.8.383',
    'Language': 'en-us',
    'User Agent': 'mozilla'
  };
  it('should return parsed IP', () => {
    assert.equal(header['IP'], expected['IP'], 'Ip is parsed incorrectly');
  });
  it('should return parsed Language', () => {
    assert.equal(header['Language'], expected['Language'], 'Language is parsed incorrectly');
  });
  it('should return passed User Agent', () => {
    assert.equal(header['User Agent'], expected['User Agent'], 'User Agent is passed incorrectly');
  });
});

describe('Route', () => {
  it('should return 200 OK for /home', (done) => {
    request('http://127.0.0.1:5000', (error, response, body) => {
      assert.equal(response.statusCode, 200);
      done();
    });
  });
});
