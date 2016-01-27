(function (nx, global) {

  var document = global.document;
  var location = global.location;

  nx.declare('nx.net.Url', {
    statics: {
      toJson: function (inObj) {
        return JSON.parse(
          JSON.stringify(inObj)
        );
      },
      searchToJson: function (inSearchStr) {
        var searchStr = inSearchStr || location.search;
        var pairs = searchStr.slice(1).split('&');
        var result = {}, pair;
        nx.each(pairs, function (val) {
          pair = val.split('=');
          if (pair[0]) {
            result[pair[0]] = decodeURIComponent(pair[1] || '');
          }
        });
        return this.toJson(result);
      },
      toQueryString: function (inJson) {
        return Object.keys(inJson).map(function (key) {
          return encodeURIComponent(key) + '=' +
            encodeURIComponent(inJson[key]);
        }).join('&');
      },
      getQueryString: function (inName, inSearchStr) {
        var searchStr = inSearchStr || location.search;
        var reg = new RegExp("(^|&)" + inName + "=([^&]*)(&|$)");
        var matches = searchStr.slice(1).match(reg);
        return matches === null ? null : decodeURIComponent(matches[2]);
      },
      parseUrl: (function () {
        var parser = document.createElement('a');
        return function (inUrl) {
          parser.href = inUrl;
          return {
            protocol: parser.protocol,
            host: parser.host,
            hostname: parser.hostname,
            port: parser.port,
            pathname: parser.pathname,
            search: parser.search,
            hash: parser.hash
          };
        }
      }())
    }
  });

}(nx, nx.GLOBAL));
