const data = require('../data/zoo_data');

const semanas = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const { hours, species } = data;

// const horario = (dia) => ({ [dia]: {
//   officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
//   exhibition: species.filter((a) => a.availability.includes(dia))
//     .map((a) => a.name),
// } });
// console.log(horario('Tuesday'));

// crio uma funcition que faz a verificaçao se o nome do animal e passado como paramentro e assim retono o nome e o dia de exebição
function VerificaAnimal(com) {
  return species.find((a) => a.name === com).availability;
}

// crio uma funçao que caso seja passado um dia da semana eu retono um Objeto com o horario e animais da semana , caso nao seja passado nada retorno um objeto com a semana e avisando que esta fechado;
function verificaSemana(dia) {
  if (dia !== 'Monday') {
    return ({ [dia]: {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: species.filter((a) => a.availability.includes(dia))
        .map((a) => a.name),
    } });
  } return ({ [dia]: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' } });
}

// crio uma funçao e crio uma const com meu arrays para que caso nao seja passado nenhum paramentro ele me retorna os horarios e os animais em exibição,
function horarios() {
  const resul = [];
  semanas.forEach((a) => {
    resul.push(verificaSemana(a));
  });
  return Object.assign(...resul);
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (species.find((specie) => specie.name === scheduleTarget)) {
    return VerificaAnimal(scheduleTarget);
  }
  if (semanas.includes(scheduleTarget)) {
    return verificaSemana(scheduleTarget);
  } return horarios();
}
// queria agradecer ao Fabio da mentoria que ajudou Bastante;
// console.log(VerificaAnimal('tigers'));
// console.log(getSchedule());
// console.log(verificaSemana('Monday'));
// console.log(fechado('Monday'));
console.log(horarios());
module.exports = getSchedule;
