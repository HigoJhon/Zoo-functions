const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const nomeAni = employees.find((a) => a.id === id).responsibleFor[0];
  const idade = species.find((b) => b.id === nomeAni).residents;
  const resuls = idade.sort((a, b) => b.age - a.age)[0];
  return Object.values(resuls);
}

module.exports = getOldestFromFirstSpecies;
