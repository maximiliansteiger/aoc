const { input } = require('./readData');

let arr = input.split('\r\n');

let forward = 0;
let depth = 0;


for (const pos of arr) {
   let move = pos.split(" ")[0]
   let x = +pos.split(" ")[1]

   switch (move) {
      case "forward":
         forward += x;
         break;

      case "up":
         depth -= x;
         break;

      case "down":
         depth += x;
         break;

      default:
         break;
   }

}

console.log(forward * depth);

