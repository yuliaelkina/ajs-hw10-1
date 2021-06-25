import ErrorRepository from '../ErrorRepository';

const loadingErrors = new ErrorRepository();
loadingErrors.add(11, 'Страница не существует');
loadingErrors.add(165, 'Страница не найдена');
loadingErrors.add(76, 'Ошибка загрузки');

test('Запрос существующего кода', () => {
  expect(loadingErrors.translate(11)).toBe('Страница не существует');
});

test('Запрос несуществующего кода', () => {
  expect(loadingErrors.translate(15)).toBe('Unknown error');
});
