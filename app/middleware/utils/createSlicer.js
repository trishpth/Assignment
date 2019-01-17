var typeOf = require('./typeOf');
var getSubset = require('./getSubset');

function createSlicer(paths) {
  switch (0, typeOf(paths)) {
    case 'void':
      return function (state) {
        return state;
      };
    case 'string':
      return function (state) {
        return (0, getSubset(state, [paths]));
      };
    case 'array':
      return function (state) {
        return (0, getSubset(state, paths));
      };
    default:
      return console.error('Invalid paths argument, should be of type String, Array or Void');
  }
}

module.exports = createSlicer