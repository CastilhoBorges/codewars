function filter_list(l) {
  const result = l.filter((x) => typeof x === "number");

  return result;
}

console.log(filter_list([1, 2, "a", "b"]));
