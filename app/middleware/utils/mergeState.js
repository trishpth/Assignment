var _extends = require('./_extends');

function mergeState(initialState, persistedState) {
  return persistedState ? _extends({}, initialState, persistedState) : initialState;
}

module.exports = mergeState