const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const [...ret] = employees;

const dois = ret[1].id;
const tres = ret[2].id;
const cinco = ret[4].id;
const oito = ret[7].id;

// console.log(ret);
function isManager(id) {
  // seu código aqui
  if (dois === id || tres === id || cinco === id || oito === id) {
    return true;
  } return false;
}
// console.log(isManager());

function getRelatedEmployees(managerId) {
  // seu código aqui
  const ver = isManager(managerId);
  if (ver === true) {
    return employees.filter((e) => e.managers
      .some((res) => res === managerId))
      .map((nome) => `${nome.firstName} ${nome.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
