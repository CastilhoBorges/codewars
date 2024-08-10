const longest = function (s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  const setNew = new Set([...s1, ...s2]);

  return [...setNew].sort().join("");
};

