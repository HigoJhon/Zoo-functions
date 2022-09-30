const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const [{ ...um }] = species[1];
const [{ ...d }] = um.residents;

console.log(um);
console.log(d);

function getEmployeeByName(employeeName) {

}

module.exports = getEmployeeByName;
