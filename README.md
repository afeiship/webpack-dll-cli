# next-url
> A simple, lightweight url parser for JavaScript

## resources:
+ https://github.com/websanova/js-url

## usage:
```js
import NxUrl from 'next-url';

// url:
NxUrl.url('hostname','https://www.baidu.com')
// www.baidu.com

//parse
NxUrl.parse('https://www.baidu.com')
/*
{ 
  tld: 'com',
  domain: 'baidu.com',
  hostname: 'www.baidu.com',
  sub: 'www',
  port: '443',
  protocol: 'https',
  path: ''
}
*/
```

