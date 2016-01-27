#next-lang-string

##description:
+ Url helper based on next toolkit.

##usage(api):
+ Basic code:
```javascript
  var url1='http://123.02.123.1:9001/?test=123';
  var search1 = '?name=afei&age=108&timestamp=12830128308';
  var Url = nx.net.Url;
```

+ searchToJson
```javascript
  //1.search to json:
  console.log(Url.searchToJson(search1));
```

+ toQueryString
```javascript
  //2.toQueryString
  var json1 = {
    age: "108",
    name: "afei",
    timestamp: "12830128308"
  };
  console.log(
    Url.toQueryString(json1)
  );
```

+ getQueryString
```javascript
  //3.getQueryString
  console.log(
    Url.getQueryString('timestamp',search1)
  );

  console.log(
    Url.getQueryString('name',search1)
  );
```

+ parseUrl
```javascript
  //4.parse url:
  console.log(
    Url.parseUrl(url1)
  );
```
