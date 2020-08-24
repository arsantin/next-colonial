"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLightReducer = void 0;

var isLightReducer = function isLightReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return !state;

    default:
      return state;
  }
};

exports.isLightReducer = isLightReducer;