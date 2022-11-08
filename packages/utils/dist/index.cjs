'use strict';

const isObject = (val) => {
  return typeof val === "object" && val !== null;
};

exports.isObject = isObject;
