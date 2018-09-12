(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxUrl = nx.declare('nx.Url', {

  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxUrl;
  }

}());
