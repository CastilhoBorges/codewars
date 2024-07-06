function updateLight(current) {
  if (current === "red") {
    return "green";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "yellow";
  }
}

console.log(updateLight("gre"));
