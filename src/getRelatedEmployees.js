const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const [...ret] = employees;

const um = ret[0].id;
const dois = ret[1].id;
const tres = ret[2].id;
const quatro = ret[3].id;
const cinco = ret[4].id;
const seis = ret[5].id;
const sete = ret[6].id;
const oito = ret[7].id;

// console.log(dois);
function isManager(id) {
  // seu código aqui
  if (dois === id || tres === id || cinco === id || oito === id) {
    return true;
  } return false;
}
console.log(isManager());

function getRelatedEmployees(managerId) {
  // seu código aqui
  if ()
}

module.exports = { isManager, getRelatedEmployees };
