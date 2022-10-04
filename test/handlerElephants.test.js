const { species } = require('../data/zoo_data');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Essa função retorna informações referentes aos elefantes conforme o argumento passado', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('testando name', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('testando averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
});
