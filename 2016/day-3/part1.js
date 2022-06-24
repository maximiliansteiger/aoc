const {
  input
} = require('./readData');

let arr = input.split("\r\n");

let cnt = 0;
arr.forEach(element => {
  let elements = element.split("  ").map(Number);
  elements.shift();
  is_possible(elements.filter(elem => elem != "").map(Number)) ? cnt++ : null;
});


function is_possible(tri) {
  return (
    (tri[0] + tri[1] > tri[2]) &&
    (tri[1] + tri[2] > tri[0]) &&
    (tri[2] + tri[0] > tri[1])
  );
}



console.log(cnt);