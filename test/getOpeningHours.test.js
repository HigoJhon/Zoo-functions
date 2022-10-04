const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Essa função retorna informações referentes aos elefantes conforme o argumento passado', () => {
    expect(getOpeningHours('')).toEqual(4);
  });
});
