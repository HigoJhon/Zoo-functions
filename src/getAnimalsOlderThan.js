const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((e) => e.name === animal)
    .residents.every((idade) => idade.age >= age);
}
console.log(getAnimalsOlderThan('tigers', 15));
module.exports = getAnimalsOlderThan;
