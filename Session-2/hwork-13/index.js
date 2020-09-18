let x = prompt("How many polygons?");
function polygons() {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i + 2; j++) {
      fd(100);
      rt(360 / (i + 2));
    }
  }
}
polygons();