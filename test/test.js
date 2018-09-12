var assert = require('assert');
var nx = require('next-js-core2');
var NxUrl = require('../src/next-url');

describe('next/url', function () {

  it('nx.Url: https://www.baidu.com short one equal protocol', function () {
    var url = 'https://www.baidu.com';
    var parsed = NxUrl.parse(url);

    // console.log(parsed);

    assert.deepEqual(parsed, {
      tld: 'com',
      domain: 'baidu.com',
      hostname: 'www.baidu.com',
      sub: 'www',
      port: '443',
      protocol: 'https',
      path: ''
    });
  });


  it('nx.Url: full url & full equal', function () {
    var url = 'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese'
    var parsed = NxUrl.parse(url);

    assert.deepEqual(parsed, {
      tld: 'co.uk',
      domain: 'example.co.uk',
      hostname: 'www.example.co.uk',
      sub: 'www',
      auth: 'rob:abcd1234',
      user: 'rob',
      pass: 'abcd1234',
      port: '80',
      protocol: 'http',
      path: '/path/index.html',
      file: 'index.html',
      filename: 'index',
      fileext: 'html',
      query:
      {
        query1: 'test',
        silly: 'willy',
        field: ['zero', , 'two']
      },
      hash: { test: 'hash', chucky: 'cheese' }
    })
  });



  it('nx.Url: baidu://sy-news?id=12 customize protocol', function () {
    var url = 'baidu://sy-news?id=12';
    var parsed = NxUrl.parse(url);

    // console.log(parsed);

    assert.deepEqual(parsed, {
      hostname: 'sy-news',
      port: '80',
      protocol: 'baidu',
      path: '',
      query: { id: '12' }
    });
  });

});
