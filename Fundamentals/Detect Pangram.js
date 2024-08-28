"use strict";

const isPangram = function (s) {
  const strInitial = s.toLowerCase().replace(/[^a-z]/g, "");
  const setStr = new Set(strInitial.split(""));
  return setStr.size === 26;
};
