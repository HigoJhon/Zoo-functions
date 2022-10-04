const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const resul = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((a) => {
    if (a.age < 18) {
      resul.child += 1;
    }
    if (a.age >= 18 && a.age < 50) {
      resul.adult += 1;
    }
    if (a.age >= 50) {
      resul.senior += 1;
    }
  });
  return resul;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const criancas = entrants.filter((crianca) => crianca.age < 18).length * prices.child;
  const aduls = entrants.filter((adul) => adul.age >= 18 && adul.age < 50).length * prices.adult;
  const velhos = entrants.filter((velho) => velho.age >= 50).length * prices.senior;
  const valor = criancas + aduls + velhos;
  return valor;
}

module.exports = { calculateEntry, countEntrants };
