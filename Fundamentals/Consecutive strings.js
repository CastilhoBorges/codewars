function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let result = "";
  for (let i = 0; i <= strarr.length - k; i++) {
    let str = "";
    for (let j = i; j < i + k; j++) {
      str += strarr[j];
    }
    if (result.length < str.length) {
      result = str;
    }
  }
  return result;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 4)
);
