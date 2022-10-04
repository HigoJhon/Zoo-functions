const getOpeningHours = require('../src/getOpeningHours');

const errado = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};
describe('testando a function getOpeningHours', () => {
  it('testando quando passa nao passa paramentro', () => {
    expect(getOpeningHours('')).toEqual(errado);
  });
  it('testando quando passa monday e 09:00-AM ', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('testando quando passa Tuesday e 09:00-AM ', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('testando quando passa Wednesday e 09:00-PM ', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('testando quando passa Thu e 09:00-AM', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('testando quando passa Friday e 09:00-ZM', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('testando quando passa Saturday e C9:00-AM', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrowError(new Error('The hour should represent a number'));
  });
  it('testando quando passa Monday e 13:00-AM', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('testando quando passa Tuesday e 09:60-AM', () => {
    expect(() => { getOpeningHours('Tuesday', '09:60-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
});
