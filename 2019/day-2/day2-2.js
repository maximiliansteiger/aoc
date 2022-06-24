const { input } = require('./readData');

let arr = input.split('\r\n');

let forward = 0;
let depth = 0;
let aim = 0;

for (const pos of arr) {
   let move = pos.split(" ")[0]
   let x = +pos.split(" ")[1]

   switch (move) {
      case "forward":
         forward += x;
         depth += x * aim;
         break;

      case "up":
         aim -= x;
         break;

      case "down":
         aim += x;
         break;

      default:
         break;
   }
}

console.log(forward * depth);

