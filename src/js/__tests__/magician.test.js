import Magician from '../magician';

test('stoned attack counting', () => {
  const Igor = new Magician('Игорь');
  Igor.attack = 100;
  Igor.distance = 2;
  Igor.stoned = true;
  expect(Igor.attack).toBe(85);
});
