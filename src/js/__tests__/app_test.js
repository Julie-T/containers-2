import ErrorRepository from '../app';

test('Получение описания', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(480)).toBe('Destroying system');
});

test('Получение ошибки', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate(481)).toBe('Unknown error');
});
