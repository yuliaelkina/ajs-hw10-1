import Daemon from '../daemon';

test('stoned attack counting', () => {
  const Oleg = new Daemon('Олег');
  Oleg.attack = 200;
  Oleg.distance = 3;
  expect(Oleg.attack).toBe(160);
});
