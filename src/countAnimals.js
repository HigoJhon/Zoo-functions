const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8] = species;

// console.log(idss);
// const [...test1] = species;
// console.log(residents)
// // const um = test1.
// console.log(tes.id);
// console.log(rest2);
// console.log(rest3);
// console.log(rest);

// console.log(`${popularity}`);
// console.log(popularity);
function countAnimals(animal) {
  // species.reduce((acum, p) => {
  //   if (animal === undefined);
  //   return {}`${acum.name}:${p.residents.length}`;
  // }, {});
  // (animal === a.name : a.residents.length));

  if (animal === undefined) {
    const resul = species.map((a) => ({ [a.name]: a.residents.length })).sort();
    return Object.assign({}, ...resul);
  }
  const save = species.find((b) => (animal.specie === b.name));
  const save2 = save.residents.filter((c) => animal.sex === c.sex);
  if (!animal.sex) {
    return save.residents.length;
  }
  if (animal.sex) {
    return save2.length;
  }
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
