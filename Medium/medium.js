const fs = require("fs");

const databuffer = fs.readFileSync("./planets.txt");
const planets = databuffer.toString();
console.log(planets);