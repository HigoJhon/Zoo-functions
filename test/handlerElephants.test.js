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
  it('testando location', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('testando popularity', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('testando availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('testando sem paramentro', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
});
