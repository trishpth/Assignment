var _isArray = Array.isArray || (Array.isArray = function (a) {
  return '' + a !== a && ({}).toString.call(a) === '[object Array]';
});
function typeOf(thing) {
  if (!thing) return 'void';

  if (_isArray(thing)) {
    if (!thing.length) return 'void';
    return 'array';
  }

  return typeof thing;
}

module.exports = typeOf