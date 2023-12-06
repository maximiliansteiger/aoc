const { input } = require("./readData");

let arr = input.split("\r\n\r\n");

console.log(arr);

let seeds = [];
let seed_soid = [];
let soil_fertilizer = [];
let fertilizer_water = [];
let water_light = [];
let light_temperature = [];
let temperature_humidity = [];
let humidity_location = [];

let simpArr = arr.map((item) => item.replace(/\D/g, ""));


console.log(simpArr);
