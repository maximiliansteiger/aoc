<<<<<<< HEAD
const { input } = require("./readData");

let arr = input.split("\r\n");

let seeds = arr[0].split(":")[1].trim().split(" ").map(Number);

let seed_to_soil = [];
let soil_to_fertilizer = [];
let fertilizer_to_water = [];
let water_to_light = [];
let light_to_temperature = [];
let temperature_to_humidity = [];
let humidity_to_location = [];

let i = 0;

let minLocation = Infinity;
let allMaps = [
  "",
  seed_to_soil,
  soil_to_fertilizer,
  fertilizer_to_water,
  water_to_light,
  light_to_temperature,
  temperature_to_humidity,
  humidity_to_location,
];

arr.forEach((element, index) => {
  if (!isNaN(+element[0])) {
    allMaps[i].push(element.split(" ").map(Number));
  }
  if (element == "") {
    i++;
  }
});
function checkMap(map, seed) {
  let result = seed;
  map.forEach((element) => {
    if (element[1] <= seed && seed < element[2] + element[1]) {
      result = Math.abs(element[1] - seed) + element[0];
    }
  });
  return result;
}

let leng = 0;
while (leng < seeds.length) {
  for (let j = 0; j < seeds[leng + 1]; j++) {
    let seed1 = seeds[leng] + j;

    let soil = checkMap(seed_to_soil, seed1);
    let fertilizer = checkMap(soil_to_fertilizer, soil);
    let water = checkMap(fertilizer_to_water, fertilizer);
    let light = checkMap(water_to_light, water);
    let temperature = checkMap(light_to_temperature, light);
    let humidity = checkMap(temperature_to_humidity, temperature);
    let location = checkMap(humidity_to_location, humidity);

    if (location < minLocation) {
      minLocation = location;
      console.log(location);
    }
  }
  leng += 2;
}

console.log("min location");
console.log(minLocation);
=======
const { input } = require('./readData');

>>>>>>> fffc6e903a434d8129c2fa8c720184845891e7ac
